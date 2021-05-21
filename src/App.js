
import './App.css';
import MyCarousel from './components/my-carousel/MyCarousel';
import MyNav from "./components/My-Navbar/MyNav"
import TitleMessage from "./components/title-message/TitleMessage"

const App = () => {
  return (
    <div className="App">
      
      <MyNav />
      <MyCarousel />
      <TitleMessage />
      
    </div>
  );
}

export default App;
