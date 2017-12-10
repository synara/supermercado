import { Injectable, Inject } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Produto } from "../models/Produto";

Injectable()
export class ProdutoService {
    options: RequestOptions;
    headers: Headers;
    produtoAPI = 'Produto/';

    constructor(private _http: Http, @Inject('ORIGIN_URL') private originUrl: string) { }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

    obterProdutos() : Observable<Produto[]> {
        return this._http.get(this.originUrl + this.produtoAPI)
        .map((response: Response) => <Produto[]>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);   
    }

    adicionar(dto: any) {      
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });

        return this._http.post(this.originUrl + this.produtoAPI, JSON.stringify(dto), this.options)
        .map(resp => console.log(resp))
        .catch(this.handleError);
    }

    obterProduto(id:any) : Observable<Produto> {
        return this._http.get(this.originUrl + this.produtoAPI + id)
        .map((response: Response) => <Produto[]>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);   
    }

    atualizar(dto: any): any {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });

        return this._http.put(this.originUrl + this.produtoAPI, JSON.stringify(dto), this.options)
        .map(resp => console.log(resp))
        .catch(this.handleError);
    }

    remover(id: any) : any {
        return this._http.delete(this.originUrl + this.produtoAPI + id)
        .catch(this.handleError);
    }
}
