import { TransactionsProvider } from './store/transactions/TransactionsState';
import { AuthProvider } from './store/auth/AuthState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Balance from './components/Balance/Balance';
import History from './components/History/History';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import TransactionForm from './components/TransactionForm/TransactionForm';
import Message from './components/Messages/Message';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PrivateRoute from './utils/PrivateRoute';
import { setAuthToken } from './utils/setAuthToken';
import './App.css';

function App() {
  if (localStorage.getItem('token')) {
    setAuthToken(localStorage.getItem('token'));
  }

  return (
    <Fragment>
      <div>
        <AuthProvider>
          <TransactionsProvider>
            <Router>
              <Navbar />
              <Message />
              <Switch>
                <PrivateRoute path='/history' component={History} exact />
                <PrivateRoute
                  path='/create'
                  component={TransactionForm}
                  exact
                />
                <PrivateRoute path='/reports' component={Balance} exact />
                <PrivateRoute path='/' component={Home} exact />
                <Route path='/register' exact component={Register} />
                <Route path='/login' exact component={Login} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
              </Switch>
            </Router>
          </TransactionsProvider>
        </AuthProvider>
      </div>
    </Fragment>
  );
}

export default App;
