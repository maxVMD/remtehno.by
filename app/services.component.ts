import { Component} from '@angular/core';
import { Price} from './price';
import { HttpDataService} from './data.service';
  
@Component({
    selector: 'service-app',
    templateUrl: `views/service.html`
})
export class ServicesComponent { 
	price: Price[] = [];

	constructor(private httpService: HttpDataService){}

    ngOnInit(){    
        this.httpService.getPrice().subscribe((data)=>{this.price=data});      
    } 

}