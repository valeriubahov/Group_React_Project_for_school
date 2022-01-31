import './App.css';
import Description from './components/Description/Description';
import Price from './components/Price/Price';
import Button from './components/Buttons/button.js';
import Image from './components/Images/Image';
import Location from './components/Location/Location';

function App() {
  return (
    <div className="App">
        <Image />
        <Description />
        <Price />
        <Location />
        <Button />
    </div>
  );
}

export default App;
