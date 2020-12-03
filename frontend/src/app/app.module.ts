import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './components/main/main.component';
import { PreviewQuestionCardComponent } from './components/main/preview-question-card/preview-question-card.component';
import {QuestionService} from './services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreviewQuestionCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
