import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    //codigo para cerrar automaticamente el menu desplegable luego de seleccionar
    // una opcion del menu y redirigir\

    // 👇 Inyecta el Router en el constructor
  constructor(private router: Router) {
    // 👇 Escucha cuando cambia la ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.cerrarNavbar();
      }
    });
  }

  // 👇 Método para cerrar el navbar de Bootstrap
  cerrarNavbar() {
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }

}
