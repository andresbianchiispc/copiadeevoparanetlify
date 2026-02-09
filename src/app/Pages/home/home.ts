import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  modalAbierto: string = ''; // 'mensual', 'trimestral', 'semestral', 'anual', o ''
  private carouselIntervals: any[] = [];

  ngOnInit() {
    // Iniciar carruseles para cada sucursal
    this.iniciarCarruseles();
  }

  ngOnDestroy() {
    // Limpiar intervalos al destruir el componente
    this.carouselIntervals.forEach(interval => clearInterval(interval));
  }

  iniciarCarruseles() {
    // Obtener todas las tarjetas de sucursales
    const sucursales = document.querySelectorAll('.sucursal-card');
    
    sucursales.forEach(sucursal => {
      const imagenes = sucursal.querySelectorAll('.carousel-imagen');
      if (imagenes.length <= 1) return; // Si solo hay una imagen, no hacer carrusel

      let indiceActual = 0;

      const interval = setInterval(() => {
        // Remover clase active de la imagen actual
        imagenes[indiceActual].classList.remove('active');
        
        // Calcular siguiente índice
        indiceActual = (indiceActual + 1) % imagenes.length;
        
        // Agregar clase active a la nueva imagen
        imagenes[indiceActual].classList.add('active');
      }, 3000); // Cambiar cada 3 segundos

      this.carouselIntervals.push(interval);
    });
  }

  toggleModal(plan: string) {
    if (this.modalAbierto === plan) {
      this.modalAbierto = '';
    } else {
      this.modalAbierto = plan;
    }
  }

  cerrarModal() {
    this.modalAbierto = '';
  }

  scrollToPlanes() {
    const element = document.getElementById('planes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}