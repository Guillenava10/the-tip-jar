import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    learnMore() {
        alert('Aquí puedes aprender más sobre cómo dar propinas adecuadas y hacer sonreír a quienes te sirven.');
    }
}