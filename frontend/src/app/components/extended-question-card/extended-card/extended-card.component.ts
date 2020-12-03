import {Component, Input, OnInit} from '@angular/core';
import {BaseEntity} from '../../../models/dto/base-entity-dto.model';

@Component({
    selector: 'app-extended-card',
    templateUrl: './extended-card.component.html',
    styleUrls: ['./extended-card.component.scss']
})
export class ExtendedCardComponent implements OnInit {

    @Input() public data: BaseEntity;

    constructor() { }

    ngOnInit(): void {
    }
}
