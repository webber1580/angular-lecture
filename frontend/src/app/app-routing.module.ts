import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionListComponent} from './components/question-list/question-list.component';
import {QuestionComponent} from './components/question/question.component';
import {AddQuestionComponent} from './components/add-question/add-question.component';
import {AddAnswerComponent} from './components/add-answer/add-answer.component';

const routes: Routes = [
    { path: 'home', component: QuestionListComponent },
    { path: 'question/:id', component: QuestionComponent },
    { path: 'add-question', component: AddQuestionComponent },
    { path: 'add-answer/:questionId', component: AddAnswerComponent },
    // { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
