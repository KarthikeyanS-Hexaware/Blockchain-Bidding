import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import {ApplicationSettings} from '../application-settings';
import {HttpClient,HttpParams,HttpHeaders } from "@angular/common/http";

export interface Message {
	type: string
}

@Injectable()
export class AuthenticationService {
	constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password });
    }
    search(customername: string, ponumber: string) {
        return this.http.post<any>('/api/authenticate', { customername: customername, ponumber: ponumber });
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('userdetails');
    }
}