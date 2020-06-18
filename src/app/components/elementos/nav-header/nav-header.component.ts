import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'ed-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent {

  @ViewChild('Header') Header;

  anima = 'slide-down'
  colorHeader: string

  constructor() { }

  // Muestra u oculta el panel
  showPanel(boton: any, panel: any){
    boton.classList.toggle('is-active')
    panel.classList.toggle('is-active')
  }

  // Mostrar u ocultar header y cambiar color
  toggleHeader(){
    let lastScrollTop = 0
    // al hacer scroll aumenta el valor de sctop
    let sctop = document.documentElement.scrollTop
    // console.log(sctop)
    let st = window.pageXOffset || document.documentElement.scrollTop


    if (st > lastScrollTop){
      this.anima = 'slide-up';
      this.colorHeader = '#1F5764'
    }else if (sctop === 0){
      this.anima = 'slide-down'
      this.colorHeader = 'transparent'
    }

    lastScrollTop = st
  }

  // Detectar scroll
  @HostListener('window:scroll', [])
    onWindowScroll(){
      this.toggleHeader()
    }

}
