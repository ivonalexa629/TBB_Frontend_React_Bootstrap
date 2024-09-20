import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegación/Navbar';
import Inicio from './components/paginas/Inicio';
import Registro from './components/paginas/Registro';
import Menu from './components/paginas/Menu';
import Usuario from './components/paginas/Usuario';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
       <Routes>
        <Route path='/' element={<Inicio/>} exact />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/usuario' element={<Usuario/>} />

       </Routes>

     </Router>
      
    </div>
  );
}

export default App;