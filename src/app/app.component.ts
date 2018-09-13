import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    src = 'assets/binu.svg';

    switch() {
        switch (this.src) {
            case 'assets/category_air.svg':
                this.src = 'assets/feature_seo.svg';
                break;
            case 'assets/feature_seo.svg':
                this.src = 'assets/category_air.svg';
                break;
        }
    }
}
