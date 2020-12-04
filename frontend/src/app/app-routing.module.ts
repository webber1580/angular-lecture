import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionListComponent} from './components/question-list/question-list.component';
import {QuestionComponent} from './components/question/question.component';

const routes: Routes = [
    { path: 'home', component: QuestionListComponent },
    { path: 'question/:id', component: QuestionComponent },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
