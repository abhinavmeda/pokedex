import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Item = ({ name, sprite }) => {
  return (
    <div className='group border-2 border-gray-900 border-solid rounded-lg text-center'>
      <div className="group-hover:text-red-600">
      {name}
      <section className="container max-w-screen-lg mx-auto">
        <img className="mx-auto" src={sprite} alt={"dude"}/>
      </section>
      </div>
    </div>
  )
}
const Grid = ({ data }) => {
  return (
    <div className="grid grid-cols-8 gap-4">
      {data.map((items,i) => <Item key={i} name={items.name} sprite={items.sprite}/>)}
  </div>
  )
} 
function App() {
  const [data, setData] = useState([])
  
  const loadData = () => {
    axios
    .get('http://localhost:3001/pokemon')
    .then(response => {
        setData(response.data)
    })
  }
  useEffect(loadData, [])
  

  return (
    <div>
      <h1 className="text-center">Pokedex</h1>
      <Grid data={data}/>
    </div>
  );
}

export default App;
