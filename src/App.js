import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import TransactionForm from './components/TransactionForm/TransactionForm';
import { TransactionsProvider } from './store/transactions/TransactionsState';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Balance from './components/Balance/Balance';
import History from './components/History/History';
import Charts from './components/Charts/Charts';

function App() {
  return (
    <Fragment>
      <div>
        <TransactionsProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route
                path='/income-expanses'
                exact
                component={TransactionForm}
              />
              <Route path='/history' exact component={History} />
              <Route path='/reports' exact component={Balance} />
            </Switch>
          </Router>
        </TransactionsProvider>
      </div>
    </Fragment>
  );
}

export default App;
