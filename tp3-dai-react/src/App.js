import logo from './logo.svg';
import Titulo from './components/Titulo/Titulo.js';
import Subtitulo from './components/Subtitulo/Subtitulo';
import './App.css';

function App() {
  const titulo =
    {
    texto: "ADMINISTRADOR DE PACIENTES",
    clase: "titulo"
  }
  const subtitulos = [
    "CREAR MI CITA",
    "ADMINISTRA TUS CITAS"
  ]
  
  
  
  
  
  
  return (
    <>
    <div className='fondo'>
      {<Titulo texto={titulo.texto} clase={titulo.clase}/>}
      { subtitulos.map(s => <Subtitulo texto={s} />)}

      </div>
    </>
  );
}

export default App;
