import { Component} from '@angular/core';
  
@Component({
    selector: 'home-app',
    templateUrl:  'views/main.html'
})
export class HomeComponent {

	public imageSources = [
     'img/slide/slide1.jpg',
     'img/slide/slide2.jpg',
     'img/slide/slide3.jpg'
  	];
  

 }