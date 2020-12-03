import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../models/dto/question-dto.model';


@Component({
    selector: 'app-extended-question-card',
    templateUrl: './extended-question-card.component.html',
    styleUrls: ['./extended-question-card.component.scss']
})
export class ExtendedQuestionCardComponent implements OnInit {

    @Input() public question: Question;

    constructor() {
        console.log(this.question);
    }

    ngOnInit(): void {
    }

}
