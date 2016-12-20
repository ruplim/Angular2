import { Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { Observable} from 'rxjs/Observable';
import {Employee} from '../models/employee.model';

@Injectable()
export class FormPoster {

    constructor( private _http: Http) {}

    getLanguages() : Observable<any> {
        return this._http.get('http://localhost:3100/getlanguages')
                        .delay(5000)
                        .map(this.extractLanguages)
                        .catch(this.handleError);
    }

    postEmployeeForm(employee : Employee) : Observable<any> {
        
        let body = JSON.stringify(employee);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http.post('http://localhost:3100/postemployee', body, options)
                   .map(this.extractData)
                   .catch(this.handleError);
    }
    private extractLanguages(res: Response) {
        let body = res.json();
        console.log('body in extractLanguages :', body);
        console.log('body.data in extractLanguages :', body.data);
        return body.data || { };
    }
    private extractData(res : Response) {
        let body = res.json();
        console.log('body in extract Data :', body);
        console.log('body.fields in extract Data :', body.fields);
        console.log('body.fields.id in extract Data :', body.fields.id);
        return body.fields || { };
    }
    private handleError( error : any) {
        console.error('post error', error);
        return Observable.throw(error.statusText);
    }
}