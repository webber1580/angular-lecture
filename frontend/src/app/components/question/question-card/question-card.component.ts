import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from '../../../services/question.service';
import {Question} from '../../../models/dto/question-dto.model';

@Component({
    selector: 'app-question-card',
    templateUrl: './question-card.component.html',
    styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {

    @Input() public question: Question;

    constructor(private questionService: QuestionService) { }

    onUpdateQuestionRating(inc: number) {
        const updatedQuestion = {...this.question};
        updatedQuestion.rating += inc;
        this.questionService.updateQuestion(this.question.id, updatedQuestion).subscribe(
            () => this.question = updatedQuestion,
            (err) => console.error('Error: ', err)
        );
    }

    onAddQuestionComment(comment: string) {
        this.questionService.addQuestionComment(this.question.id, comment).subscribe(
            updatedQuestion => this.question = updatedQuestion,
            err => console.error('Error: ', err)
        );
    }
}
