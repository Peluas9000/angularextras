import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Equipo } from "../models/equipo";
import { environment } from "../../environments/environment";
import { firstValueFrom } from "rxjs";


@Injectable()
export class ServiceEquipos {

    constructor(
        private _http: HttpClient
    ){}

    async getEquiposAsync():Promise<Equipo []>{
        let request="api/Equipos";
        let url=environment.urlApiEquipos+request;
        return firstValueFrom(
            this._http.get<Equipo []>(url)
        )
    }


}