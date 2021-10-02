import { TransactionsProvider } from './store/transactions/TransactionsState';
import TransactionForm from './components/TransactionForm/TransactionForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Balance from './components/Balance/Balance';
import History from './components/History/History';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Message from './components/Messages/Message';
import './App.css';

function App() {
  return (
    <Fragment>
      <div>
        <TransactionsProvider>
          <Router>
            <Navbar />
            <Message />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/create' exact component={TransactionForm} />
              <Route path='/history' exact component={History} />
              <Route path='/reports' exact component={Balance} />
              <Route path='/register' exact component={Register} />
              <Route path='/login' exact component={Login} />
            </Switch>
          </Router>
        </TransactionsProvider>
      </div>
    </Fragment>
  );
}

export default App;
