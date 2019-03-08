//aplicando POO en JS
//Clase: PRODUCTO
//Propiedades: nombre - precio - año creacion
//Metodos: listar productos- guardar productos - eliminar producto -...

class Product {
  constructor(name, price, year){
    this.name=name;
    this.price=price;
    this.year=year;
  }
}

//Clase de la interfas
class UI{
  //metodo agregar producto - el cual recibe un objeto producto
  addProduct(product){
    //
    const productList = document.getElementById('product-list');
    //creo el elemento div
    const element = document.createElement('div');
    //llenar elemento div
    element.innerHTML=`
    <div class="card text-center mb-4">
      <div class="card-body">
        <strong>Product</strong>:${product.name}
        <strong>Price</strong>:${product.price}
        <strong>Year</strong>:${product.year}
        <a href="#" class="btn btn-danger" name="delete">Delete</a>
      </div>
    </div>
    `;
    productList.appendChild(element);
  }
  //metodo para limpiar campos
  resetForm(){
    document.getElementById('product-form').reset();
  }

//metodo eliminar producto
  deleteProduct(element){
    if(element.name==='delete'){
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage('producto eleminado con exito','danger');
    }
  }
//metodo mostrar mensaje
  showMessage(message, cssClass){
    const div = document.createElement('div');
    //agrego estas dos clases al div creado
    div.className=`alert alert-${cssClass} mt-2`;
    //agrego el mensaje dentro del div
    div.appendChild(document.createTextNode(message));
    //mostrando en el DOM o en pantalla
    //selecciono todo el contenido de mi container
    const container = document.querySelector('.container');
    //selecciono todo el contenido de mi app
    const app = document.querySelector('#App');
    //voy a insertar el div antes del app
    container.insertBefore(div, app);
    //
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000);
  }
}

//Eventos del DOM
//capturar el evento del submit
document.getElementById('product-form').addEventListener('submit', function(e){
  const name=document.getElementById('name').value;
  const price=document.getElementById('price').value;
  const year=document.getElementById('year').value;

console.log(name, price, year);

//instancia de la clase PRODUCT, para acceder a sus metodos, propiedades, etc
const product=new Product(name, price, year);
const ui = new UI();
if(name===''|| price==='' || year===''){
  return ui.showMessage('complete los campos vacios','warning');
}
//instancia de la clase UI, para acceder a sus metodos, propiedades, etc.

ui.addProduct(product);
ui.resetForm();
ui.showMessage('prodcuto agregado satisfactoriamente', 'success')

//evento para que no se refresque la pagina al presionar el boton submit
e.preventDefault();
});


//capturar el evento de Eliminar
document.getElementById('product-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteProduct(e.target);
});
