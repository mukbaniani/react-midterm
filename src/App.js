import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import { Route, Switch } from 'react-router';
import SingInForm from './components/forms/sing-in-form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Switch>
          <Route path="/auth">
            <SingInForm />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
