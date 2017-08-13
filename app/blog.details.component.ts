import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { HttpDataService} from './data.service';
import {Articles}	from './articles'

  
@Component({
    selector: 'blog-details-app',
    templateUrl: 'views/blog-details.html'
})
export class BlogDetailsComponent implements OnDestroy{ 

	private id: number;
    articles: Articles[] = [];

    article = new Articles();
	

    getArticle() {
        for( let i = 0; i <= this.articles.articles.length; i++ ){    
            if(this.articles.articles[i].id == this.id.toString()){
                this.article = this.articles.articles[i];
                break;
            }
        }
    }

    private routeSubscription: Subscription;

    constructor(private route: ActivatedRoute, private httpService: HttpDataService){
           
        this.routeSubscription = this.route.params.subscribe((params: any) => {
            this.id = params.id
        });

    }


    ngOnInit(){

        this.httpService.getData().subscribe((data: any) => {
                this.articles = data;
                console.log(data.articles);
                this.getArticle();
        }); 

    }

    

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }

}