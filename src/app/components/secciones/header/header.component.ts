import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'ed-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('Header') Header;

  anima = 'slide-down'
  colorHeader: string

  constructor() { }

  // Mostrar u ocultar header y cambiar su color
  toggleHeader(){
    let lastScrollTop = 0
    // al hacer scroll aumenta el valor de sctop
    let sctop = document.documentElement.scrollTop
    let st = window.pageXOffset || document.documentElement.scrollTop

    if (st > lastScrollTop){
      this.anima = 'slide-up'
      this.colorHeader = 'white'
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
