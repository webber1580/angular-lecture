import { Component, OnInit } from '@angular/core';
import {Question} from '../../models/dto/question-dto.model';
import {QuestionService} from '../../services/question.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-question',
    templateUrl: './add-question.component.html',
    styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {

    public newQuestion: Question = {
        rating: 0,
        theme: '',
        content: '',
        tags: [],
        answers: [],
        comments: []
    };

    constructor(private questionService: QuestionService, private router: Router) { }

    onQuestionAdd() {
        this.questionService.createQuestion(this.newQuestion).subscribe(
            () => this.router.navigate(['/home']),
            (err) => console.error('Error: ', err)
        );
    }
}
