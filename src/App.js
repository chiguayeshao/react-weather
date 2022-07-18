import './App.css';
import CurrentWeather from './components/current-weather/current-weater';
import Search from './components/search/search';

function App() {

  const handleOnSearchchange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchchange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
