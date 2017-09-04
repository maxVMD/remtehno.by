import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpDataService{
 
    constructor(private http: Http){ }
     
    getData(){
        return this.http.get('./articles.json')
        		.map((resp:Response)=>{
                            let articlesList = resp.json();
                            return articlesList;
                        });
    },

    getPrice(){
        return this.http.get('./price.json')
        		.map((resp:Response)=>{
                            let articlesList = resp.json();
                            return articlesList;
                        });
    }
}