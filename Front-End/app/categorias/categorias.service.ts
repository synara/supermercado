import { Injectable, Inject } from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Categoria } from "../models/Categoria";

Injectable()
export class CategoriaService {
    private categoriaAPI = 'Categoria/';
    private headers: Headers;
    private options: RequestOptions;
    
    constructor(private _http: Http, @Inject('ORIGIN_URL') private originUrl: string) { }
    
    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

    obterCategorias() : Observable<Categoria[]>{
        return this._http.get(this.originUrl + this.categoriaAPI)
        .map((response: Response) => <Categoria[]>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);   
    }

    adicionar(dto: any) {      
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });

        return this._http.post(this.originUrl + this.categoriaAPI, JSON.stringify(dto), this.options)
        .map(resp => console.log(resp))
        .catch(this.handleError);
    }

    obterCategoria(id:any) : Observable<Categoria> {
        return this._http.get(this.originUrl + this.categoriaAPI + id)
        .map((response: Response) => <Categoria[]>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);   
    }

    
    atualizar(dto: any): any {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });

        return this._http.put(this.originUrl + this.categoriaAPI, JSON.stringify(dto), this.options)
        .map(resp => console.log(resp))
        .catch(this.handleError);
    }

    remover(id: any) : any {
        return this._http.delete(this.originUrl + this.categoriaAPI + id)
        .catch(this.handleError);
    }
}