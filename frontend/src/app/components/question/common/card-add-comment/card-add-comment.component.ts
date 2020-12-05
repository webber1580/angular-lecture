import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-card-add-comment',
    templateUrl: './card-add-comment.component.html',
    styleUrls: ['./card-add-comment.component.scss']
})
export class CardAddCommentComponent {

    @Output() public addComment: EventEmitter<string> = new EventEmitter<string>();
    public comment = '';

    onAddComment() {
        if (this.comment) {
            this.addComment.emit(this.comment);
            this.comment = '';
        }
    }
}
