const Producto = ({producto,setProductos,productos}) => {

    const modificarNombre = (id) => {
        const nuevoNombre = prompt('Ingresá el nuevo nombre',producto.nombre)
        const productoNuevo = {
            id,
            nombre: nuevoNombre,
            cantidad: producto.cantidad,
            precio: producto.precio,
            marcado: producto.marcado
        }        
        const productosNuevos = productos.map( productoState => productoState.id === id ? productoNuevo : productoState )
        setProductos(productosNuevos)
    }

    const modificarCantidad = (id) => {
        const nuevaCantidad = prompt('Ingresá la nueva cantidad',producto.cantidad)
        if (!isNaN(nuevoPrecio)){
            const productoNuevo = {
                id,
                nombre: producto.nombre,
                cantidad: nuevaCantidad,
                precio: producto.precio,
                marcado: producto.marcado
            }        
            const productosNuevos = productos.map( productoState => productoState.id === id ? productoNuevo : productoState )
            setProductos(productosNuevos)
        } else {
            alert('Ingrese un numero valido')
        }
    }

    const modificarPrecio = (id) => {
        const nuevoPrecio = prompt('Ingresá el nuevo precio',producto.precio)
        if (!isNaN(nuevoPrecio)){
            const productoNuevo = {
                id,
                nombre: producto.nombre,
                cantidad: producto.cantidad,
                precio: nuevoPrecio,
                marcado: producto.marcado
            }        
            const productosNuevos = productos.map( productoState => productoState.id === id ? productoNuevo : productoState )
            setProductos(productosNuevos) 
        } else {
            alert('Ingrese un numero valido')
        }
    }

    const marcarProducto = (id) => {
        const productoMarcado = {
            id,
            nombre: producto.nombre,
            cantidad: producto.cantidad,
            precio: producto.precio,
            marcado: !producto.marcado
        }        
        const productosNuevos = productos.map( productoState => productoState.id === id ? productoMarcado : productoState )
        setProductos(productosNuevos)
    }

    const eliminarProducto = id => {
        const productosActualizados = productos.filter( producto => producto.id !== id)
        setProductos(productosActualizados)
    }
      
    return (
        <div id={producto.id} className={producto.marcado ? 'listo producto' : 'producto'}>
            <div onClick={() => modificarNombre(producto.id)}>{producto.nombre}</div>
            <div onClick={() => modificarCantidad(producto.id)}>{producto.cantidad}</div>
            <div onClick={() => modificarPrecio(producto.id)}>$ {producto.precio}</div>
            <div className="acciones">
                <div onClick={() => eliminarProducto(producto.id)}><i className="fa-solid fa-trash"></i></div>
                <div onClick={() => marcarProducto(producto.id)}><i className="fa-solid fa-check"></i></div>
            </div>
        </div>
    )
}

export default Producto
