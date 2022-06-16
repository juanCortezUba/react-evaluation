import React from 'react'

function ExitComponent({ setCreds}) {
  const desloguear=()=>{
    // borro clave del localstorage
    localStorage.removeItem("creds");
    // set el state de App fuerza rendering 
    setCreds(null)
  }
  return (
    <div><h2>Está seguro que quiere salir del sistema?</h2>
    <button onClick={(ev)=>{ desloguear()}}>Si</button>
    <button>No</button>
    </div>
  )
}

export default ExitComponent