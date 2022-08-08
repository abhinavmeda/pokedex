import './App.css';

const Item = ({ key, items }) => {
  return (
    <div key={key} className="text-center">
      {items}
    </div>
  )
}
const Grid = ({ dummy }) => {
  return (
    <div className="grid grid-cols-8 gap-4">4
      {dummy.map(items => <Item items={items} key={items}/>)}
  </div>
  )
}
function App() {
  const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div>
      <Grid dummy={sample}/>
    </div>
  );
}

export default App;
