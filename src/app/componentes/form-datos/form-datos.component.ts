import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-form-datos',
  templateUrl: './form-datos.component.html',
  styleUrls: ['./form-datos.component.css']
})
export class FormDatosComponent implements OnInit {
  //Circulo
  radioCir=1;
  valorAreaC;
  valorPerimetroC;
  calculadoC=false;

  //Rectangulo
  lado1Rec =1;
  lado2Rec =1;
calculado = false;
valorArea;
valorPerimetro;

//Cuadrado
 ladoCD=1;
 calculadoCD=false;
 valorAreaCD;
 valorPerimetroCD;


//Triangulo
ladoAT=1;
ladoBT=1;
ladoCT=1;
valorPerimetroT;
valorAreaT;
calculadoT=false;
//Valores
    @Input() opcion: string;
   @Input() mostrarCirculo: boolean;
  @Input()   mostrarCuadrado: boolean;
  @Input() mostrarRectangulo: boolean;
  @Input()   mostrarTriangulo: boolean;


  constructor() { }
 
  
  ngOnInit(): void {
  }
  rectangulo( valor1,valor2){
      console.log("El valor 1 : "+ valor1);
      console.log("El valor 2 : "+ valor2);
      var area = valor1*valor2;
      var perimetro = (2*valor1)+(2*valor2);
      console.log("El area es : "+ area);
      console.log("El perimetro es : "+ perimetro);
      this.calculado = true;
      this.valorArea=area;
      this.valorPerimetro=perimetro;
  }

  circulo(radio){
    console.log("El radio es  : "+ radio);
    var area = Math.PI * (radio*radio);
    var perimetro = 2* Math.PI * radio;
    this.calculadoC = true;
    this.valorAreaC=area;
    this.valorPerimetroC=perimetro;
  }
  triangulo(lado1,lado2,lado3){
    this.valorPerimetroT =
    parseInt(lado1) +     parseInt(lado2) +    parseInt(lado3) ;
    var sp =this.valorPerimetroT/2;
    this.valorAreaT = Math.sqrt(sp*(sp-lado1)*(sp-lado2)*(sp-lado3));
    this.calculadoT= true;
  }
  cuadrado(lado){
    this.valorPerimetroCD =lado*4;
    this.valorAreaCD =lado*lado;
    this.calculadoCD= true;
  }

}
