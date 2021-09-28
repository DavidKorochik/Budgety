import { createContext, useReducer } from 'react';
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
} from '../types';

const initialState = {
  transactions: [],
  filter: null,
  current: null,
  message: [],
};

export const TransactionsContext = createContext(initialState);

export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionsReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  };

  const updateTransaction = (transaction) => {
    dispatch({ type: UPDATE_TRANSACTION, payload: transaction });
  };

  const setCurrent = (transaction) => {
    dispatch({ type: SET_CURRENT, payload: transaction });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const setMessage = (message) => {
    const id = uuidv4();

    dispatch({ type: SET_MESSAGE, payload: { id, message } });

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

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        message: state.message,
        current: state.current,
        filter: state.filter,
        addTransaction,
        deleteTransaction,
        updateTransaction,
        setCurrent,
        clearCurrent,
        setMessage,
        filteredTransactions,
        clearFilter,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
