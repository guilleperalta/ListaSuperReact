import { useState } from "react"

const Formulario = ({productos , setProductos}) => {

    const [nombre,setNombre] = useState('')
    const [cantidad,setCantidad] = useState(1)

    const sumar = () => {
        const total = Number(cantidad) + 1;
        setCantidad(total)
    }
    const restar = () => {
        const total = cantidad - 1;
        total >= 1 ? setCantidad(total) : setCantidad(1)
    }
    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        return random
    }
    const agregar = (e) => {
        e.preventDefault()
        if (nombre == '') {
            alert('El campo nombre esta vacio')
            return
        }else{
            const nuevoProducto = {
                id: generarId(),
                nombre,
                cantidad,
                precio: 0,
                marcado: false
            }
            setProductos([...productos , nuevoProducto])
            
            setNombre('')
            setCantidad(1)        
        }
    }

    return (
        <form onSubmit={(e)=>{agregar(e)}} className="formulario">
            <div className="contenedor-inputs">
                <div className="inputs">
                    <label htmlFor="nombre">Producto</label>
                    <input 
                        id="nombre"
                        type="text"
                        autoFocus
                        value={nombre}
                        onChange={(e)=>{setNombre(e.target.value)}}
                    />
                </div>
                <div className="inputs">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        id="cantidad"
                        type="number"
                        value={cantidad}
                        onChange={(e)=>{setCantidad(Number(e.target.value))}}
                    />
                </div>
            </div>
            <div className="modificar-cantidad botones">
                <div
                    onClick={()=>{sumar()}}
                ><i className="fa-solid fa-angle-up"></i></div>
                <div
                    onClick={()=>{restar()}}
                ><i className="fa-solid fa-angle-down"></i></div>
            </div>
            <div className="agregar botones">
                <button
                    type="submit"
                    onClick={(e)=>{agregar(e)}}
                ><i className="fa-solid fa-plus"></i></button>
            </div>
        </form>
    )
}

export default Formulario
