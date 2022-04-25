import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
{/* import the zodiac array */}
import { zodiac } from './data.js';

function App() {
  return (
    <div className="App">
      {/* the Header component needs a string passed in as the `name` prop */}
      <Header 
        name= 'Beau Elliott' />
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Main zodiacs= { zodiac } />
      {/* the Footer component needs a year passed in as the `year` prop */}
      <Footer year= '2022' />
      
      
    </div>
  );
}

export default App;
