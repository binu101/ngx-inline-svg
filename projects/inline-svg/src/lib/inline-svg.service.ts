import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class InlineSvgService {

    sourceMap: {[source: string]: BehaviorSubject<string>} = {};

    constructor(
        private http: HttpClient
    ) {}

    getSvg(src: string) {

        if (!this.sourceMap[src]) {
            this.sourceMap[src] = new BehaviorSubject<string>('');
            this.loadSvg(src);
        }

        return this.sourceMap[src];
    }

    loadSvg(src: string) {

        this.http.get(src, {
            observe: 'response',
            responseType: 'text'
        }).pipe(
            map((whut) => {
                return whut.body;
            })
        ).subscribe(svg => {
            this.sourceMap[src].next(svg);
        });

    }
}
