import {productosServicios} from "../servicios/productos-servicios.js";

const form = document.querySelector('[data-form]');
const categoria = document.querySelector('[data-categoria]');
const id = document.querySelector('[data-id]');
const url = document.querySelector('[data-url]').value;
const nombre = document.querySelector('[data-nombre]').value;
const descripcion = document.querySelector('[data-descripcion]').value;
const precio = document.querySelector('[data-precio]').value;
const boton = document.querySelector('[data-boton]').value;
const btn = document.querySelector('[data-btn]').value;

const url = new URL(window.location);
const id = url.searchParams.get("id");

const getInfo = async () => {
    try {
        const product = await productosServicios.detalleProducto(id);

        imgUrl.value = product.imageUrl;
        nombre.value = product.name;
        precio.value = product.price;
        categoria.value = product.categoria;
        descripcion.value = product.description;
    } catch (error) {
        alert("Hubo un Error")
    }
};

if (id) {
    getInfo();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        productosServicios.updateItem(imgUrl.value, nombre.value, precio.value, categoria.value, descripcion.value, id).then(() => {
            alert('Producto editado con exito')
            window.location.href = '../screens/adminProducts'
        })
    })
} else {
    alert("ERROR, no se encontro el id")
}


