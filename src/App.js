import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch,withRouter, Route, Link } from 'react-router-dom';
import AllCustomers from './components/AllCustomers';
import CustomerBids from './components/CustomerBids';

function App(props) {
  return (
    <Router>

    <Switch>
              <Route exact path='/' component={AllCustomers} />
              <Route exact path='/customer/:id' component={props => (
                    <CustomerBids {...props} />
                  )} />
          </Switch>
          </Router>
 //   <div >
  //   <AllCustomers/>
   //  <Route path="/customer/:id">
   //  <CustomerBids />
   // </Route>
   // </div>
  );
}

export default App;
