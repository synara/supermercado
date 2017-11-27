import { Injectable, Inject } from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


Injectable()
export class CategoriaService {
    private categoriaAPI = '/controllers/Categorias/Adicionar';
    private headers: Headers;
    private options: RequestOptions;
    
    constructor(private _http: Http, @Inject('ORIGIN_URL') private originUrl: string) { }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    adicionar(dto: any) {      
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });

        return this._http.post(this.originUrl + this.categoriaAPI, JSON.stringify(dto), this.options)
        .map(resp => console.log(resp))
        .catch(this.handleError);
    }
}