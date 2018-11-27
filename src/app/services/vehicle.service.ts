import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor( private http: Http) { }
  putVehicle(obj,rObj){
    console.log(obj);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
      let url = 'http://ec2-13-126-31-178.ap-south-1.compute.amazonaws.com:17114/api/org/vehicle';
      return this.http.post(url, rObj, {headers: headers}).pipe(map(res => console.log(res.json())));
  }
}
