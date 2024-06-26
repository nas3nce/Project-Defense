import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ErrorService implements OnDestroy {

    private apiError$$ = new BehaviorSubject(null)
    public apiError$ = this.apiError$$.asObservable()




    constructor() { }


    setError(error: any): void {
        this.apiError$$.next(error)
    }

    ngOnDestroy(): void {
        this.apiError$$.next(null)
    }


}
