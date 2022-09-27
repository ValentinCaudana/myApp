
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  

  return (
      <div className='App'>
        <header>
          <NavBar/>
        </header>
        <main>
          <ItemListContainer greeting='Hola  a todos!'/>
        </main>
      </div>
  );
}

export default App;
