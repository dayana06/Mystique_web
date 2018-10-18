import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable(
)

export class SignupService {
    urlBase = 'http://localhost:3000/api/';
    constructor(private http: Http) {

    }

    getParameters() {
        return this.http.get(this.urlBase + 'parametro').map(res =>
            res.json()
        );
    }

    getValuesLike() {
        return this.http.get(this.urlBase + 'valor_parametro').map(res =>
            res.json()
        );
    }

    getStates() {
        return this.http.get(this.urlBase + 'estado').map(res =>
            res.json()
        );
    }

    getCities() {
        return this.http.get(this.urlBase + 'ciudad').map(res =>
            res.json()
        );
    }
    signUp(user) {
        return this.http.post(this.urlBase + 'signup', user).map(res =>
            res.json()
        );
    }
    getUser() {
        return this.http.get(this.urlBase + 'usuario').map(res =>
            res.json()
        );
    }
    
}