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

export default function TransactionReducer(state, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        loading: false,
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (t) => t._id !== action.payload
        ),
        loading: false,
      };
    case UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map((t) =>
          t._id === action.payload.id ? action.payload : t
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: [...state.message, action.payload],
        loading: false,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: state.message.filter((m) => m.id !== action.payload),
        loading: false,
      };
    case FILTER_TRANSACTIONS:
      return {
        ...state,
        filter: state.transactions.filter(
          (t) =>
            t.description
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            t.amount.toLowerCase().includes(action.payload.toLowerCase())
        ),
        loading: false,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: null,
        loading: false,
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        t_error: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loadig: false,
      };
    default:
      return state;
  }
}
