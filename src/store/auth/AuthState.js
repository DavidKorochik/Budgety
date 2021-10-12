import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import {
  USER_ERROR,
  REGISTER_USER,
  LOGIN_USER,
  GET_USER,
  LOGOUT_USER,
} from '../types';
import { setAuthToken } from '../../utils/setAuthToken';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  error: null,
  loading: true,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = async () => {
    if (localStorage.getItem('token')) {
      setAuthToken(localStorage.getItem('token'));
    }

    try {
      const res = await axios.get('/api/auth');
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response.data.error });
    }
  };

  const registerUser = async (user) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/users', user, config);
      dispatch({ type: REGISTER_USER, payload: res.data });

      await loadUser();
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response.data.error });
    }
  };

  const loginUser = async (user) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/auth', user, config);
      dispatch({ type: LOGIN_USER, payload: res.data });

      await loadUser();
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response.data.error });
    }
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        loading: state.loading,
        loadUser,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
