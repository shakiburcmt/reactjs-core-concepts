import logo from './logo.svg';
import './App.css';

const number = 9;
const student = { name: 'Shakib', wifeName: 'Mariam' };

const style = {
  color: 'aqua',
  backgroundColor: 'black',
  padding: '10px'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h3>React Era!</h3>
        </div>
        <div className="nasheed">
          <p style={{ color: 'yellow' }}>Name: The Beauty of Existence</p>
          <p>Sura Kahf {number + number}</p>
          <p style={style}>My name is {student.name} & {student.wifeName} is my wife.</p>
        </div>

      </header>
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

// create component and dynamically set data in any html tag
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
