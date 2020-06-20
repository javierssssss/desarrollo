import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { FormDatosComponent } from "../form-datos/form-datos.component";

@Component({
  selector: 'app-formas',
  templateUrl: './formas.component.html',
  styleUrls: ['./formas.component.css']
})
export class FormasComponent implements OnInit {
  figura = 'Circulo';
  mensajeOpcion;
  mostrar=false;
  mostrarC=false;
  mostrarT=false;
  mostrarR=false;
   //parentMessage = "message from parent"
  constructor() { }



 
  ngOnInit(): void {
  }

  pedirDatosFigura(figuraES){
    switch (figuraES) {
      case 0:
          console.log("Circulo");
          this.figura="Circulo";
          this.mensajeOpcion= "Ha escogido la opcion: A" ;
          console.log(this.mensajeOpcion);
          this.mostrar=true;
          this.mostrarC=false;
          this.mostrarT=false;
          this.mostrarR=false;
          break;
      case 1:
          console.log("Triangulo");
          this.figura="Triangulo";
          this.mensajeOpcion= "Ha escogido la opcion: B" ;
          console.log(this.mensajeOpcion);
          this.mostrar=false;
          this.mostrarC=false;
          this.mostrarT=true;
          this.mostrarR=false;
          break;
      case 2:
          console.log("Rectangulo");
          this.figura="Rectangulo";
          this.mensajeOpcion= "Ha escogido la opcion: C" ;
          console.log(this.mensajeOpcion);
          this.mostrar=false;
          this.mostrarC=false;
          this.mostrarT=false;
          this.mostrarR=true;
          break;
      case 3:
          console.log("Cuadrado");
          this.figura="Cuadrado";
          this.mensajeOpcion= "Ha escogido la opcion: D" ;
          console.log(this.mensajeOpcion);
          this.mostrar=false;
          this.mostrarC=true;
          this.mostrarT=false;
          this.mostrarR=false;
          break;
     
      default:
          console.log("Sin opcion!");
          break;
  }
  }

}
