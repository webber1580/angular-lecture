import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {Question} from '../../models/dto/question-dto.model';

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

    @Output() public extendQuestion: EventEmitter<Question> = new EventEmitter<Question>();

    public questionList: Question[];
    constructor(private questionService: QuestionService) { }

    ngOnInit(): void {
        this.questionService.getQuestions().subscribe(
            questionList => this.questionList = questionList,
            err => console.error('Error: ', err)
        );
    }

    onQuestionExtended(question: Question) {
        this.extendQuestion.emit({...question});
    }
}
