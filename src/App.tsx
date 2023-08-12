import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {

  const PersonName={
    first:'Bruce',
    last:"wayne"
  }

  const PersonListName=[{
    first:"ayan",
    last:"biswas"
  },{
    
    first:"sunil",
    last:"das"
    
  },{
    first:"ratan",
    last:"tata"

  }]

  return (
    <div className="App">
    <Greet name="ayan" messageCount={20}/>
    <Person name={PersonName}/>
    <PersonList namelist={PersonListName}/>
    </div>
  );
}

export default App;
