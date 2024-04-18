import './formulario.css';
import ItemFormulario from '../ItemFormulario/ItemFormulario';

const Formulario = () => {
    return (
        <>
        <h2>Crea mi cita </h2>
       <form>
        <ItemFormulario texto='Nombre Mascota' placeHolder='Nombre Mascota' type='text'></ItemFormulario>
        <ItemFormulario texto='Nombre Dueño' placeHolder='Nombre dueño de la mascota' type='text' ></ItemFormulario>
        <ItemFormulario texto='Fecha' type='date'></ItemFormulario>
        <ItemFormulario texto='Hora' type='time' ></ItemFormulario>
        <ItemFormulario texto='Sintomas' type='text' ></ItemFormulario>
        <input type='submit' value='Agregar Cita'></input>
       </form>
       </>
    );
}

export default Formulario;