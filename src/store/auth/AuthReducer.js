import {
  USER_ERROR,
  REGISTER_USER,
  LOGIN_USER,
  GET_USER,
  LOGOUT_USER,
} from '../types';

export default function AuthReducer(state, action) {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case LOGOUT_USER:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false,
      };
    case USER_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
