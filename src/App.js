import Profiles from './components/profiles'
import './App.css';
import {data} from './data';
import React,{useState} from 'react';

function App() {
  const [datos,setDatos] = useState(data);
  const [value, setValue] = useState(5);
  const handleClear = () => {
    setValue(0);
    setDatos([]);
  }
  return (
    <div className="app">
      <h2>{value} birthdays today</h2>
      {datos.map((profile) => {
      const {id} = profile;
     return <Profiles profile={profile} key={id}></Profiles>
      })}
      <button type="button" onClick={handleClear}>Clear All</button>
    </div>
  );
}

export default App;
