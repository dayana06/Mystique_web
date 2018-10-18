import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable(
)

export class AppService {
    urlBase: String;
    constructor(private http: Http) {
        this.urlBase = 'http://localhost:3000/api/';
    }

    getCards() {
        return this.http.get(this.urlBase + 'imagen').map(res =>
            res.json()
        );
    }

    getRealTitle() {
        return this.http.get(this.urlBase + 'titulo_seccion').map(res =>
            res.json()
        );
    }

    getBusinessGoals() {
        return this.http.get(this.urlBase + 'objetivo').map(res =>
            res.json()
        );
    }

    getSystemInfo() {
        return this.http.get(this.urlBase + 'sistema').map(res =>
            res.json()
        );
    }

    getBussiness() {
        return this.http.get(this.urlBase + 'negocio').map(res =>
            res.json()
        );
    }

    getBussinessContact() {
        return this.http.get(this.urlBase + 'contacto_negocio').map(res =>
            res.json()
        );
    }

    getBussinessDescription() {
        return this.http.get(this.urlBase + 'descripcion_negocio').map(res =>
            res.json()
        );
    }

    getEmployee() {
        return this.http.get(this.urlBase + 'empleado').map(res =>
            res.json()
        );
    }

    getSpecialty() {
        return this.http.get(this.urlBase + 'especialidad').map(res =>
            res.json()
        );
    }

    getServiceCategory() {
        return this.http.get(this.urlBase + 'categoria_servicio').map(res =>
            res.json()
        );
    }

    getBlogInfo() {
        return this.http.get(this.urlBase + 'consejo').map(res =>
            res.json()
        );
    }

    getServicesByKind() {
        return this.http.get(this.urlBase + 'tipo_servicio').map(res =>
        res.json()
    );
    }
    getServices() {
        return this.http.get(this.urlBase + 'servicio').map(res =>
        res.json()
    );
    }

    getPromoList() {
        return this.http.get(this.urlBase + 'promocion').map(res =>
            res.json()
        );
    }

    getEmployeeList() {
        return this.http.get(this.urlBase + 'empleado').map(res =>
            res.json()
        );
    }

    getSocialNetwork() {
        return this.http.get(this.urlBase + 'red_social').map(res =>
            res.json()
        );
    }
}