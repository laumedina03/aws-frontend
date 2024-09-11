import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<h1>Welcome to the User Directory</h1>
	<UsersList /> {/*Render the UsersList component*/}
      </header>
    </div>
  );
}

export default App;
