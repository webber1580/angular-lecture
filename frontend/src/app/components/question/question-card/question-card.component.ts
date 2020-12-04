import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from '../../../services/question.service';
import {Question} from '../../../models/dto/question-dto.model';
import {UpdateEntityRating} from '../../../models/update-entity-rating.model';

@Component({
    selector: 'app-question-card',
    templateUrl: './question-card.component.html',
    styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {

    @Input() public question: Question;

    constructor(private questionService: QuestionService) { }

    onUpdateQuestionRating(updateQuestionRating: UpdateEntityRating) {
        const updatedQuestion = {...this.question};
        updatedQuestion.rating += updateQuestionRating.value;
        this.questionService.updateQuestion(updateQuestionRating.id, updatedQuestion).subscribe(
            () => this.question = updatedQuestion,
            (err) => console.error('Error: ', err)
        );
    }
}
