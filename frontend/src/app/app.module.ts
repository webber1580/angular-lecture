import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { PreviewQuestionCardComponent } from './components/question-list/preview-question-card/preview-question-card.component';
import {QuestionService} from './services/question.service';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import { QuestionComponent } from './components/question/question.component';
import { QuestionCardComponent } from './components/question/question-card/question-card.component';
import {MatIconModule} from '@angular/material/icon';
import { AnswerCardComponent } from './components/question/answer-card/answer-card.component';
import { CardHeaderComponent } from './components/question/common/card-header/card-header.component';
import { CardCommentComponent } from './components/question/common/card-comment/card-comment.component';
import { CardAddCommentComponent } from './components/question/common/card-add-comment/card-add-comment.component';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        QuestionListComponent,
        PreviewQuestionCardComponent,
        QuestionComponent,
        QuestionCardComponent,
        AnswerCardComponent,
        CardHeaderComponent,
        CardCommentComponent,
        CardAddCommentComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatRippleModule,
        MatIconModule,
        MatDividerModule,
    ],
    providers: [QuestionService],
    bootstrap: [AppComponent]
})
export class AppModule { }
