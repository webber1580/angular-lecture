import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../models/dto/comment-dto.model';

@Component({
    selector: 'app-card-comment',
    templateUrl: './card-comment.component.html',
    styleUrls: ['./card-comment.component.scss']
})
export class CardCommentComponent {

    @Input() public comment: Comment;
}
