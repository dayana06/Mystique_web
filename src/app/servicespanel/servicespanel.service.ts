import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable(
)

export class ServicePanelService {
    specify: String;
    constructor(private http: Http) {

    }
}