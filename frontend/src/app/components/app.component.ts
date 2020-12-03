import { Component } from '@angular/core';
import {Question} from '../models/dto/question-dto.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public question: Question;

    onQuestionExtended(question: Question) {
        this.question = question;
    }

    onHomeClicked() {
        this.question = null;
    }
}
