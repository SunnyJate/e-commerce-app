import logo from './logo.svg';
import './App.css';
import Navigation from './customers/components/navigation/Navigation.jsx'; // Update the import path
import HomePage from './customers/Pages/Homepage/HomePage.jsx';
import Footer from './customers/components/Footer/Footer.jsx';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
