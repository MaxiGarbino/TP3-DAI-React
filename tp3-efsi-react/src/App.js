import logo from './logo.svg';
import Titulo from './components/Titulo/Titulo.js';
import Formulario from './components/Formulario/Formulario.js';
import Cita from './components/Cita/Cita.js'
import './App.css';

function App() {
  
 
  

  
  return (
    <>
    <div id='root'>
      {<Titulo/>}
      <Formulario></Formulario>
      <Cita></Cita>
    </div>
    </>
  );
}

export default App;
