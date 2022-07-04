import Unsplash from 'react-unsplash-wrapper';
import Stardate from './Stardate';

function App() {
  return (
    <Unsplash expand photoId="E0AHdsENmDg">
      <div className="App">
        <Stardate />
      </div>
    </Unsplash>
  );
}

export default App;
