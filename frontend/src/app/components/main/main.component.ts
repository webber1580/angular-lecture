import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {Question} from '../../models/dto/question-dto.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    @Output() public extendQuestion: EventEmitter<Question> = new EventEmitter<Question>();

    public questionList: Question[];
    constructor(private questionService: QuestionService) { }

    ngOnInit(): void {
        this.questionService.getSources().subscribe(sources => this.questionList = sources);
    }

    onQuestionExtended(question: Question) {
        this.extendQuestion.emit({...question});
    }

}
