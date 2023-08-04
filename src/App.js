import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './Weather';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather />
        <footer>
          This project coded by{' '}
          <a href='https://www.linkedin.com/in/mahsaghezel/'>Mahsa Ghezel</a>{' '}
          and It is{' '}
          <a href='https://github.com/ghezel1995/reactweatherfinalproject'>
            open-source
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
