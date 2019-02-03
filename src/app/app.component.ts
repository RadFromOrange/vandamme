import {Component, Pipe, PipeTransform} from '@angular/core';
import {ArrayType} from "@angular/compiler";




@Pipe({ name: 'myPipe'})
export class MyPipe implements PipeTransform{
  transform(val) {
    return val.toUpperCase()
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = "ggg";

  //takes an array of JavaScript File objects


  //take a single JavaScript File object



  //using the functions with your file:



  imageSrc;
  myfile ;
  getBase64(file) {
    let  reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log((<string>reader.result).split(',')[1]);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }



  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.myfile = file ;
    //var pattern = /image-*/;
    //var reader = new FileReader();
    /*if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }*/
    //reader.onload = this._handleReaderLoaded.bind(this);
    //reader.readAsArrayBuffer(file);
  }
  //_handleReaderLoaded(e) {
  //  let reader = e.target;
  //  this.imageSrc = reader.result;
  //  console.log(this.imageSrc)
  //}

  valueModel = 'test';
  valueIHM = 'test';


  g(){
    console.log(this.getBase64(this.myfile));
  }

  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  r(s){
    this.valueModel = s ;
    this.valueIHM= s ;
    console.log(s)
  }
}
