import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import Todo from './components/Todo'

function App() {


  return (
    <>
      <Header/>
      <Button btnText="Add Task"/>
      <Todo/>
    </>
  )
}

export default App
