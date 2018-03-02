import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { Message,UserDetails,UserDetailsData, searchDetails, searchDeatilsData } from '../Interfaces/interface';

const CHAT_URL = 'ws://localhost:4200/';

@Injectable()
export class CommonserviceService {
	public userdetails: Subject<UserDetailsData>;
	public searchdetails: Subject<searchDeatilsData>;

	constructor(private wsservice:WebsocketService) {

		this.userdetails = <Subject<UserDetailsData>>wsservice
			.connect(CHAT_URL)
			.map((response: MessageEvent): UserDetailsData => {
				let data = JSON.parse(response.data);
				return {
					Key: data.Key,
					InputParam: data.InputParam,
					Output: data.Output
				}
			});

			this.searchdetails = <Subject<searchDeatilsData>>wsservice
			.connect(CHAT_URL)
			.map((response: MessageEvent): searchDeatilsData => {
				let data = JSON.parse(response.data);
				return {
					Key: data.Key,
					InputParam: data.InputParam,
					Output: data.Output
				}
			});
    }
}
