import { createContext, useReducer } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import TransactionsReducer from './TransactionsReducer';
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  FILTER_TRANSACTIONS,
  CLEAR_FILTER,
  GET_TRANSACTIONS,
  TRANSACTION_ERROR,
  SET_LOADING,
} from '../types';

const initialState = {
  transactions: [],
  filter: null,
  current: null,
  message: [],
  t_error: null,
  loading: true,
};

export const TransactionsContext = createContext(initialState);

export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionsReducer, initialState);

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/transactions', transaction, config);
      dispatch({ type: ADD_TRANSACTION, payload: res.data });
    } catch (err) {
      dispatch({ type: TRANSACTION_ERROR, payload: err.message });
    }
  };

  const getAllTransactions = async () => {
    try {
      const res = await axios.get('/api/transactions');
      dispatch({ type: GET_TRANSACTIONS, payload: res.data });
    } catch (err) {
      dispatch({ type: TRANSACTION_ERROR, payload: err.message });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/transactions/${id}`);
      dispatch({ type: DELETE_TRANSACTION, payload: id });
    } catch (err) {
      dispatch({ type: TRANSACTION_ERROR, payload: err.message });
    }
  };

  const updateTransaction = async (transaction) => {
    try {
      const res = await axios.patch(
        `/api/transactions/${transaction._id}`,
        transaction
      );
      dispatch({ type: UPDATE_TRANSACTION, payload: res.data });
    } catch (err) {
      dispatch({ type: TRANSACTION_ERROR, payload: err.message });
    }
  };

  const setCurrent = (transaction) => {
    dispatch({ type: SET_CURRENT, payload: transaction });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const setMessage = (message, type) => {
    const id = uuidv4();

    dispatch({ type: SET_MESSAGE, payload: { message, type, id } });

    setTimeout(() => {
      dispatch({ type: CLEAR_MESSAGE, payload: id });
    }, 5000);
  };

  const filteredTransactions = (text) => {
    dispatch({ type: FILTER_TRANSACTIONS, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        message: state.message,
        current: state.current,
        filter: state.filter,
        t_error: state.t_error,
        loading: state.loading,
        addTransaction,
        getAllTransactions,
        deleteTransaction,
        updateTransaction,
        setCurrent,
        clearCurrent,
        setMessage,
        filteredTransactions,
        clearFilter,
        setLoading,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
