import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../models/dto/question-dto.model';
import {QuestionService} from '../../../services/question.service';
import {UpdateEntityRating} from '../../../models/update-entity-rating.model';
import {AddEntityComment} from '../../../models/add-entity-comment.model';
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

    onUpdateAnswerRating(updateAnswerRating: UpdateEntityRating) {
        const updatedAnswer = {...this.answer};
        updatedAnswer.rating += updateAnswerRating.value;
        this.questionService.updateAnswer(this.questionId, updateAnswerRating.id, updatedAnswer).subscribe(
            () => this.answer = updatedAnswer,
            (err) => console.error('Error: ', err)
        );
    }

    onAddQuestionComment(addAnswerComment: AddEntityComment) {
        this.questionService.addAnswerComment(this.questionId, addAnswerComment.id, addAnswerComment.comment).subscribe(
            updatedAnswer => this.answer = updatedAnswer,
            err => console.error('Error: ', err)
        );
    }
}
