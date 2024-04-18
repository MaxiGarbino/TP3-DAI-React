import './Card.css';
const Card = (
    {
        Mascota = "Default mascota",
        Dueño = "Default dueño",
        Fecha = "2021-08-05",
        Hora= "08:20",
        Sintomas = "Le duele la pierna"
    }
    
    ) => {
    return (
        <>
            <div className='cita'>
                <p>"Mascota: "</p><span>{Mascota}</span>
                <p>"Dueño: "</p><span>{Dueño}</span>
                <p>"Fecha: "</p><span>{Fecha}</span>
                <p>"Hora: "</p><span>{Hora}</span>
                <p>"Sintomas: "</p><span>{Sintomas}</span>
                <button class="eliminar">Eliminar ×</button>
            </div>
        </>
    );
}

export default Card;