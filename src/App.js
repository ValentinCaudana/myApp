import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import 'boxicons';
import { BrowserRouter as Router} from 'react-router-dom';
import ProductosLista from './components/Productos/Catalogo';
import { Inicio } from './components/Inicio';
import { DataProvaider } from './components/DataProvaider';



function App() {
  

  return (
    <DataProvaider>
      <div className="App">
        <Router>
        <NavBar/>
        <ProductosLista/>
        <Inicio/>
        </Router>
      </div>
    </DataProvaider>  
  );
}

export default App;
