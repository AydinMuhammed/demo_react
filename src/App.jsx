import Home from './components/Home';
import './App.css'

function App() {
  
  const bienvenue = "Welcome...";

  const data = {
    userName : "Bob",
    isAdmin: true
  }


  return (
      <div className="maClass">
        <h1>
          {bienvenue.toUpperCase()}
        </h1>
        <Home name={data.userName} isAdmin={data.isAdmin} />
        <form>
          <label htmlFor="name">Entrez votre nom</label>
          <input type="text" id="name" />
        </form>
      </div>
  
  )
}

export default App


