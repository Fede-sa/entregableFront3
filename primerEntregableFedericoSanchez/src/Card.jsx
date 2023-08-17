

function Card({nombre, lugar}){


return(
    <div className="card">
        <h2>Buenas {nombre}</h2>
        <p>Tu lugar favorito es: {lugar}</p>
  </div>
)
}

export default Card;