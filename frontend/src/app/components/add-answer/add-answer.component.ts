import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Answer} from '../../models/dto/answer-dto.model';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.scss']
})
export class AddAnswerComponent {

    public questionId: number;
    public newAnswer: Answer = {
        rating: 0,
        theme: '',
        content: '',
        comments: [],
        isCorrect: false
    };

    constructor(private questionService: QuestionService,
                private router: Router,
                private route: ActivatedRoute) {
        this.questionId = +this.route.snapshot.paramMap.get('questionId');
    }

    onQuestionAdd() {
        this.questionService.addQuestionAnswer(this.questionId, this.newAnswer).subscribe(
            () => this.router.navigate([`/question/${this.questionId}`]),
            (err) => console.error('Error: ', err)
        );
    }
}
