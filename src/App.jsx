import { useState , useEffect } from "react"
import Formulario from "./componentes/Formulario"
import Listado from "./componentes/Listado"

const App = () => {

  const [productos,setProductos] = useState([])

  useEffect(() => {
    const obtenerProductosLS = () => {
      const productosLS = JSON.parse(localStorage.getItem('productosLS'));
      productosLS.length > 1 && setProductos(productosLS)
    }
    obtenerProductosLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('productosLS', JSON.stringify( productos ));
  }, [productos])

  return (
    <>
      <Formulario 
        productos={productos}
        setProductos={setProductos}
      />
      <Listado 
        productos={productos}
        setProductos={setProductos}
      />
    </>
  )
}

export default App
