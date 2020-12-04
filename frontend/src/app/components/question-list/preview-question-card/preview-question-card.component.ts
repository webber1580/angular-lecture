import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../../models/dto/question-dto.model';

@Component({
    selector: 'app-preview-question-card',
    templateUrl: './preview-question-card.component.html',
    styleUrls: ['./preview-question-card.component.scss']
})
export class PreviewQuestionCardComponent {

    @Input() public question: Question;
}
