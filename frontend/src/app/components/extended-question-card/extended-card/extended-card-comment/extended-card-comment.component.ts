import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../models/dto/comment-dto.model';

@Component({
    selector: 'app-extended-card-comment',
    templateUrl: './extended-card-comment.component.html',
    styleUrls: ['./extended-card-comment.component.scss']
})
export class ExtendedCardCommentComponent implements OnInit {

    @Input() public comments: Comment[];

    constructor() { }

    ngOnInit(): void {
    }

}
