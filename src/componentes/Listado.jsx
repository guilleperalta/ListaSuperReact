import { useEffect, useState } from "react"
import Producto from "./Producto"

const Listado = ({productos , setProductos}) => {

    const [total,setTotal] = useState(0)
    
    useEffect(() => {
        let suma = 0
        productos.map(prod => {
            suma = (Number(prod.precio) * prod.cantidad) + suma
        })
        setTotal(suma.toFixed(2))
    }, [productos])
    

    return (
        <div className="listado">
            <div className="titulo-listado">
                <span>Listado de productos</span>
                <hr />
                <div className="estadisticas">
                    <span>Cant de productos: {productos.length} </span>
                    <span>Total: $ {total} </span>
                </div>

            </div>
            <div className="titulos">
                <span className="titulo">Nombre</span>
                <span className="titulo">Cantidad</span>
                <span className="titulo">Precio</span>
                <span className="titulo">Acciones</span>
            </div>
            {productos.map(producto => {
                if (!producto.marcado) {
                    return (
                        <Producto 
                            key={producto.id}
                            producto={producto}
                            productos={productos}
                            setProductos={setProductos}
                        />
                    )
                }
            })}
            {productos.length > 0 && (<span className="titulo-listado-listo">Productos ya agregados</span>)}
            {productos.map(producto => {
                if (producto.marcado) {
                    return (
                        <Producto 
                            key={producto.id}
                            producto={producto}
                            productos={productos}
                            setProductos={setProductos}
                        />
                    )
                }
            })}

        </div>
    )
}

export default Listado
