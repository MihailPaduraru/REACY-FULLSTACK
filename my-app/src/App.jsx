
import './App.css'
import Button from './Button';
import SearchBar from './SearchBar';
import TutorsList from './TutorsList';
import Menu from './assets/Menu';
import Books from './books/Books';

function App() {

  const isVisible = true;

  const menuItems = [
    { id:0,
      name: 'Acasa' 
  },
    { id:1,
      name: 'Despre noi'
  },

    { id:2,
      name: 'Constact'
  }
  ];

  return (
    <div>
      
      <Menu items= {menuItems}/>
      <Button text= 'Button' icon='&' handleClick={() => {console.log("Scrie ceva")}} />
      <SearchBar text={'Ar'} isVisible={isVisible}  price= {23}/>
      <TutorsList/>
      <Books/>

    </div>
  )
}

export default App
