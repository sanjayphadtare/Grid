import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { filter, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeadcountService {

  private selectedHeadcountMenuSubject = new BehaviorSubject<string>(null);
  selectedHeadcountMenu$ = this.selectedHeadcountMenuSubject.asObservable().pipe(
    filter(v => !!v),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  constructor(private http: HttpClient) { }

  setHeadcountMenu(menu: string) {
    this.selectedHeadcountMenuSubject.next(menu);
  }

  getHeadcountData(req: app.ApiRequest) {
    console.log('req: ', req);
    //send req object along with the API request to get the exact paged and sorted data
    return this.http.get<app.ApiResponse<app.HeadcountItem[]>>('/assets/headcount-original.json');
  }
}
