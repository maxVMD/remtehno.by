import { Component, OnInit} from '@angular/core';
import { Articles} from './articles';
import { HttpDataService} from './data.service';
  
@Component({
    selector: 'blog-app',
    templateUrl: 'views/blog.html'
})
export class BlogComponent {

	articles: Articles[] = [];
     
    constructor(private httpService: HttpDataService){}

    ngOnInit(){    
        this.httpService.getData().subscribe((data)=>{this.articles=data});      
    }
	
 }