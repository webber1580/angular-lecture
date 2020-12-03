import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './components/main/main.component';
import { PreviewQuestionCardComponent } from './components/main/preview-question-card/preview-question-card.component';
import {QuestionService} from './services/question.service';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import { ExtendedQuestionCardComponent } from './components/extended-question-card/extended-question-card.component';
import { ExtendedCardComponent } from './components/extended-question-card/extended-card/extended-card.component';
import { ExtendedCardMainContentComponent } from './components/extended-question-card/extended-card/extended-card-main-content/extended-card-main-content.component';
import { ExtendedCardCommentComponent } from './components/extended-question-card/extended-card/extended-card-comment/extended-card-comment.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        PreviewQuestionCardComponent,
        ExtendedQuestionCardComponent,
        ExtendedCardComponent,
        ExtendedCardMainContentComponent,
        ExtendedCardCommentComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatRippleModule,
        MatIconModule,

    ],
    providers: [QuestionService],
    bootstrap: [AppComponent]
})
export class AppModule { }
