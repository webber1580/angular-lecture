import {Component, Input, OnInit} from '@angular/core';
import {BaseEntity} from '../../../../models/dto/base-entity-dto.model';

@Component({
    selector: 'app-extended-card-main-content',
    templateUrl: './extended-card-main-content.component.html',
    styleUrls: ['./extended-card-main-content.component.scss']
})
export class ExtendedCardMainContentComponent implements OnInit {

    @Input() public data: BaseEntity;

    constructor() { }

    ngOnInit(): void {
    }

}
