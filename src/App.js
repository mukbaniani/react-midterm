import './App.css';
import Navigation from './components/navigation';
import { Route, Switch } from 'react-router';
import SingInForm from './components/forms/sing-in-form';
import Post from './pages/post';
import AddCompany from './components/forms/add-company';
import Pagination from './pages/pagination';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Switch>
          <Route path="/auth">
            <SingInForm />
          </Route>
          <Route path="/companies">
            <Post />
          </Route>
          <Route path="/add-company">
            <AddCompany />
          </Route>
          <Route path="/pagination">
            <Pagination />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
