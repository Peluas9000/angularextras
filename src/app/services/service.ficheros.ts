import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceFicheros {
    private urlApi = "https://apipostfiles.azurewebsites.net/";

    constructor(private _http: HttpClient) {}

    // El JSON debe tener exactamente 'fileName' y 'fileContent' (el Base64)
    uploadFile(fileName: string, fileContent: string): Observable<any> {
        let request = "api/TestingFiles";
        
        let jsonPayload = {
            fileName: fileName,
            fileContent: fileContent
        };

        return this._http.post(this.urlApi + request, jsonPayload);
    }
}