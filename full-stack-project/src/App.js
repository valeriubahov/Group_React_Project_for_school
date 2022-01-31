import logo from './logo.svg';
import './App.css';
import Description from './Description';
import Price from './Price';
import Button from './components/buttons/button.js';
import Image from './Image';
import Location from './Location';

function App() {
  return (
    <div className="App">
      <Image />
      <Price />
      <Description />
      <Location />
      <Button />
    </div>
  );
}

export default App;
