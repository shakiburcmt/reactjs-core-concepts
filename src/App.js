import logo from './logo.svg';
import './App.css';

const number = 9;
const student = { name: 'Shakib', wifeName: 'Mariam' };
// try array of objects
const student2 = [
  { name: 'abc', class: 'eight' }
]

const style = {
  color: 'aqua',
  backgroundColor: 'black',
  padding: '10px'
}

function App() {
  const array = [2022, 'mari', 'shakib', 'ayesha', 'sara', '2023'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          {/* array theke newa hoyeche */}
          <h3>React Era! {array[0]}</h3>
        </div>
        
        {/* simple design in header part */}
        <div className="nasheed">
          <p style={{ color: 'yellow' }}>Name: The Beauty of Existence</p>
          <p>Sura Kahf {number + number}</p>
          <p style={style}>My name is {student.name} & {student.wifeName} is my wife.</p>
        </div>
        {/* header close here */}
      </header>
      
      {/* simple map operation to see list of all data from array */}
      {
        array.map(arr => <li>List: {arr}</li>)
      }

      {/* from object */}
      {
        array.map(arr => <Person name={arr}></Person>)
      }

      {/* from array */}
      {
        student2.map(arr => <Person name={arr.class}></Person>)
      }

      {/* value set for dynamic in created component */}
      <Person name="Md. Shakibur Rahman" profession="Profession: MERN Stack Developer"></Person>
      <Person name="Mariam" profession="Profession: Home Minister"></Person>
      <Person status="We are very happy to have each other."></Person>
    </div>
  );
}

// simple function
// function Person() {
//   return (
//     <div className='design'>
//       <h1>Md. Shakibur Rahman</h1>
//       <h3>Profession: Mern Stack Developer</h3>
//     </div>
//   )
// }

// created component and dynamically set data in any html tag
function Person(props) {
  console.log(props)
  return (
    <div className='design'>
      <h1>{props.name}</h1>
      <h3>{props.profession}</h3>
      <p>{props.status}</p>
    </div>
  )
}
export default App;
