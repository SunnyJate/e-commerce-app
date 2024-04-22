import logo from './logo.svg';
import './App.css';
import Navigation from './customers/components/navigation/Navigation.jsx'; // Update the import path
import HomePage from './customers/Pages/Homepage/HomePage.jsx';

function App() {
  return (
    <div className="">
      <Navigation></Navigation>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
