import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Dashboard from './components/Dashboard/Dashboard';
// import Navigation from './components/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Login />
      <Registration />
      <Dashboard />
    </div>
  );
}

export default App;
