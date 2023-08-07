import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './Weather';

function App() {
  return (
    <div className='App'>
      <div className='container main-container'>
        <Weather defaultCity='New York' />
        
      </div>
    </div>
  );
}

export default App;
