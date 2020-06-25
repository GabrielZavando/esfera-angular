import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'ed-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @ViewChild('punto1') punto1: ElementRef
  @ViewChild('punto2') punto2: ElementRef
  @ViewChild('punto3') punto3: ElementRef
  @ViewChild('prev') prev: ElementRef
  @ViewChild('next') next: ElementRef
  // @ViewChild('btnPlay') btnPlay: ElementRef

  public DOM: HTMLElement = this.elementRef.nativeElement;
  public actual = 0
  public run = true
  public puntos = this.DOM.getElementsByClassName('punto')
  public iconplay = 'fas fa-pause'
  public play: any
  public runtime = 3000
  public item = this.DOM.getElementsByClassName('Slider-item')


  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void{
    this.play = setInterval(() => {
      this.siguiente()
    }, this.runtime)
  }

  siguiente(){
    this.actual ++
    if (this.actual > 2){
      this.actual = 0
    }
    this.showSlide(this.actual)
  }

  anterior(){
    this.actual --
    if (this.actual < 0){
      this.actual = 2
    }
    this.showSlide(this.actual)
  }

  showPuntos(n){
    for (let i = 0; i < this.puntos.length; i ++){
      if (this.puntos[i].className.includes('punto-activo')){
        this.puntos[i].className = this.puntos[i].className.replace('punto-activo', '')
        break
      }
    }
    this.puntos[n].className += ' punto-activo'
  }


  // Recibe el item actual y le aplica la clase slider-actual. Ejecuta la funcion puntos y le envía el item actual
  showSlide(n){
    for (let i = 0; i < this.item.length; i++){
      if (this.item[i].className.includes('slider-actual')){
        this.item[i].className = this.item[i].className.replace('slider-actual', '')
        break
      }
    }
    this.actual = n
    this.item[n].className += ' slider-actual'
    // luego ejecutamos funcion showPuntos
    this.showPuntos(n)
  }

  playPause(){
    if (this.run === false){
      this.iconplay = 'fas fa-pause'
      this.run = true
      this.play = setInterval(() => {
        this.siguiente()
      }, this.runtime)
    }else{
      this.iconplay = 'fas fa-play'
      clearInterval(this.play)
      this.run = false
    }
  }

}
