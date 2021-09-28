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

export default function TransactionReducer(state, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };
    case UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: [...state.message, action.payload],
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: state.message.filter((m) => m.id !== action.payload),
      };
    case FILTER_TRANSACTIONS:
      return {
        ...state,
        filter: state.transactions.filter((t) =>
          t.description.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: null,
      };
    default:
      return {
        ...state,
      };
  }
}
