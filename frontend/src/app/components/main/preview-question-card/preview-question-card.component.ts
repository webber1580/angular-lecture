import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../../models/dto/question-dto.model';

@Component({
    selector: 'app-preview-question-card',
    templateUrl: './preview-question-card.component.html',
    styleUrls: ['./preview-question-card.component.scss']
})
export class PreviewQuestionCardComponent implements OnInit {

    @Output() public extendQuestion: EventEmitter<Question> = new EventEmitter<Question>();
    @Input() public question: Question;

    constructor() { }

    ngOnInit(): void {
    }

    onCardClicked() {
        this.extendQuestion.emit({...this.question});
    }

}
