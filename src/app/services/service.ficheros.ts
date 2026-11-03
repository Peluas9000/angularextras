import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ServiceFicheros {
    private urlApi = environment.urlApiFile;

    constructor(private _http: HttpClient) {}

    // El endpoint de Azure espera un JSON con fileName y fileContent (Base64)
    uploadFile(fileName: string, fileContent: string): Observable<any> {
        let request = "api/TestingFiles";
        let payload = {
            fileName: fileName,
            fileContent: fileContent
        };
        return this._http.post(this.urlApi + request, payload);
    }
}