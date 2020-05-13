import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, shareReplay, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private selectedAppMenuSubject = new BehaviorSubject<string>(null);
  selectedAppMenu$ = this.selectedAppMenuSubject.asObservable().pipe(
    filter(v => !!v),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  private showMenuBarSubject = new BehaviorSubject<boolean>(true);
  showMenuBar$ = this.showMenuBarSubject.asObservable().pipe(delay(0));
  
  constructor(private router: Router) { }

  navigate(url: Array<string>) {
    this.router.navigate(url);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  setAppMenu(menu: string) {
    this.selectedAppMenuSubject.next(menu);
  }

  setMenuBarVisibility(show: boolean){
    this.showMenuBarSubject.next(show);
  }
}
