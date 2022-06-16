import Unsplash from 'react-unsplash-wrapper';
import Clock from './Clock';

function App() {
  return (
    <Unsplash expand photoId="E0AHdsENmDg">
      <div className="App">
        <Clock />
      </div>
    </Unsplash>
  );
}

export default App;
