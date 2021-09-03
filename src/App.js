import './App.css';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Books from './pages/Books';
import Categories from './pages/Categories'
import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Books />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </div>
);

export default App;
