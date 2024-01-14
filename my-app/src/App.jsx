
import Alert from './Alert';
import './App.css'
import Card from './Card';
import Card2 from './Card2';


function App() {

  const name = 'Sergiu';


  return (
    <div>
      <Alert>Mesajul este fara variant !!</Alert>
      <Alert variant='success'>Mesajul este cu succes !!</Alert>
      <Alert variant='error'>Mesajul este cu eroare !!</Alert>


      <p className= 'alert warning'>Acest mesaj nu ar trebui sa aiba stilizare </p>

      <Card></Card>
      <Card2></Card2>

      <p className='red'>Text cu rosu din app.jsx</p>
    </div>
  )
}

export default App
