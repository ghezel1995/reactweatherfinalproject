import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './Weather';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <Weather defaultCity='Paris' />
      </div>
    </div>
  );
}

export default App;
