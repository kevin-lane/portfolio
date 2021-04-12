import './App.css';
import NavigationBar from './Components/Navigationbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  function switchPage(){
    switch (window.location.pathname) {
      case '/about':
        return( <About />);
      case '/contact':
        return( <Contact />);
      default:
        return(<Home />);
    }
  }

  return (
    <div className="App">
      <NavigationBar className="Navbar" /> 
      
      <header className="App-header">
          {switchPage()}
      </header>
    </div>
  );
}

export default App;
