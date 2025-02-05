import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo3';

  // Propiedades
  producto = {
    id: 0,
    descripcion: '',
    precio: 0
  };

  productos = [
    { id: 1, descripcion: 'Gansito Marinela', precio: 15.50 },
    { id: 2, descripcion: 'Pepsi', precio: 15.50 },
    { id: 3, descripcion: 'Coca', precio: 15.50 },
    { id: 4, descripcion: 'Tacos', precio: 15.50 },
    { id: 5, descripcion: 'Pinguinitos', precio: 15.50 },
  ];

  // Función para agregar un producto al arreglo
  agregarProducto() {
    if (this.producto.id == 0) {
      alert('El ID debe ser diferente a cero');
      return;
    }

    // Verificamos que el ID no sea repetido
    for (let i = 0; i < this.productos.length; i++) {
      if (this.producto.id == this.productos[i].id) {
        alert('Ya existe un producto con ese ID');
        return;
      }
    }

    // Agregamos el producto al arreglo
    this.productos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    });

    // Reseteamos el objeto producto
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;
  }

  // Función para seleccionar un producto existente
  seleccionarProducto(productoSeleccionado: { id: number; descripcion: string; precio: number }) {
    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.precio = productoSeleccionado.precio;
  }

  // Función para modificar un producto existente
  modificarProducto() {
    let encontrado = false;
    for (let i = 0; i < this.productos.length; i++) {
      if (this.producto.id == this.productos[i].id) {
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].precio = this.producto.precio;
        encontrado = true;

        // Reseteamos el objeto producto
        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.precio = 0;
        break; // Salimos del bucle
      }
    }
    if (!encontrado) {
      alert('No existe un producto con ese ID');
    }
  }

  // Función para eliminar un producto del arreglo
  eliminarProducto(id: number) {
    for (let i = 0; i < this.productos.length; i++) {
      if (id == this.productos[i].id) {
        this.productos.splice(i, 1);
        alert('Producto eliminado correctamente');
        return;
      }
    }
    alert('No existe un producto con ese ID');
  }
}