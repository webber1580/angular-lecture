import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from '../../../services/question.service';
import {Answer} from '../../../models/dto/answer-dto.model';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.scss']
})
export class AnswerCardComponent {

    @Input() public questionId: number;
    @Input() public answer: Answer;

    constructor(private questionService: QuestionService) { }

    onUpdateAnswerRating(inc: number) {
        const updatedAnswer = {...this.answer};
        updatedAnswer.rating += inc;
        this.questionService.updateAnswer(this.questionId, this.answer.id, updatedAnswer).subscribe(
            () => this.answer = updatedAnswer,
            (err) => console.error('Error: ', err)
        );
    }

    onRightAnswerSelected() {
        const updatedAnswer = {...this.answer};
        updatedAnswer.isCorrect = true;
        this.questionService.updateAnswer(this.questionId, this.answer.id, updatedAnswer).subscribe(
            () => this.answer = updatedAnswer,
            (err) => console.error('Error: ', err)
        );
    }

    onAddQuestionComment(comment: string) {
        this.questionService.addAnswerComment(this.questionId, this.answer.id, comment).subscribe(
            updatedAnswer => this.answer = updatedAnswer,
            err => console.error('Error: ', err)
        );
    }
}
