import './App.css';

const Item = ({ items }) => {
  return (
    <div className="text-center">
      {items}
    </div>
  )
}
const Grid = ({ dummy }) => {
  return (
    <div className="grid grid-cols-8 gap-4">
      {dummy.map(items => <Item key={items}items={items}/>)}
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
