import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Item = ({ name, sprite, types, color}) => {
  const groupClassName = `group border-2 border-${color} border-solid rounded`
  console.log(color)
  return (
    <div className={groupClassName}>
        <div>
          <div className='text-center'>
            {name}
          </div>
          <section className="container max-w-screen-lg mx-auto group-hover:hidden">
            <img className="mx-auto" src={sprite} alt={name}/>
          </section>
          <div className="invisible group-hover:visible border-solid rounded bg-orange-300">
            {types.length === 2? "types: ":"type: "}{types.join('-')}
          </div>
        </div>
        

    </div>
  )
}
const Grid = ({ data }) => {
  return (
    <div className="grid grid-cols-8 gap-4">
      {data.map((items,i) => <Item key={i} name={items.name} color={items.color} sprite={items.sprite} types={items.type.map(each => each.type.name)}/>)}
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
