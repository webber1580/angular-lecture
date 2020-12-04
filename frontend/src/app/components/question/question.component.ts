import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../models/dto/question-dto.model';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../services/question.service';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements  OnInit{

    public question: Question;
    private id: number;

    constructor(private route: ActivatedRoute, private questionService: QuestionService) {
        this.id = +this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.questionService.getQuestion(this.id).subscribe(
            question => this.question = question,
            err => console.error('Error: ', err)
        );
    }
}
