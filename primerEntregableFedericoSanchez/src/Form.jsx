import { useState } from 'react'
import Card from './Card';


function Form(){

    const [nombre, setNombre]=useState(""); 
    const [lugar, setLugar]=useState("");
  
    const handleSubmit = (e)=>{
      e.preventDefault();

      if (nombre&&lugar) {
        alert('Por favor, completa todos los campos.');
    }

    return(
        
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              placeholder="Escribe tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <br />
          <label>
            Lugar Favorito:
            <input
              type="text"
              placeholder="Escribe tu lugar favorito"
              value={lugar}
              onChange={(e) => setLugar(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>

        <Card nombre={nombre} lugar={lugar}/>

      </div>

    )
 }
}

export default Form;