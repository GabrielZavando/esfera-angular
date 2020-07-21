import { Component} from '@angular/core';

@Component({
  selector: 'ed-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent{
  activo = 1

  constructor( ) { }

  activar(num: number){
    switch (num){
      case 1:
        this.activo = 1
        break
      case 2:
        this.activo = 2
        break
      case 3:
        this.activo = 3
        break
      default:
        this.activo = 1
    }
  }

}
