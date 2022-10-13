import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import NavBar from './components/NavBar';
import 'boxicons';
import ProductosLista from './components/Productos/Catalogo';
import Dataprovider from './components/Contex/Dataprovider';


function App() {
  

  return (
    <Dataprovider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='productos' element={<Catalogo/>}/>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/' element={<Inicio/>}/>
        </Routes>
      </BrowserRouter>
    </Dataprovider>
  );
}

export default App;
