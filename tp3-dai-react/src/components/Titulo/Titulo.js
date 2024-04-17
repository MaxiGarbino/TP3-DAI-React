
import './Titulo.css';

const Titulo = (
    { 
        texto = 'Este es el titulo por default',
        clase = 'titulo'
    }
) => {

    
    return (
        <>
            <h1 className={clase}>{texto}</h1>
        </>
    );
}

export default Titulo;