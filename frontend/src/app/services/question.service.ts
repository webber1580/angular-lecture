import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Question} from '../models/dto/question-dto.model';
import {Answer} from '../models/dto/answer-dto.model';

@Injectable()
export class QuestionService {

    private url = `${environment.baseUrl}/api/Question`;

    constructor(private http: HttpClient) { }

    public getQuestions(): Observable<Question[]> {
        return this.http.get<Question[]>(`${this.url}`);
    }

    public getQuestion(id: number): Observable<Question> {
        return this.http.get<Question>(`${this.url}/${id}`);
    }

    public createQuestion(source: Question): Observable<number> {
        return this.http.post<number>(this.url, source);
    }

    public updateQuestion(id: number, source: Question): Observable<any> {
        return this.http.put(`${this.url}/${id}`, source);
    }

    public deleteQuestion(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }

    public addQuestionComment(id: number, comment: string): Observable<Question>  {
        const source = { content: comment };
        return this.http.put<Question>(`${this.url}/QuestionComment/${id}`, source);
    }

    public addAnswerComment(questionId: number, answerId: number, comment: string): Observable<Answer>  {
        const source = { content: comment };
        return this.http.put<Answer>(`${this.url}/AnswerComment/${questionId}/${answerId}`, source);
    }

    public updateAnswer(questionId: number, answerId: number, source: Answer): Observable<any> {
        return this.http.put(`${this.url}/Answer/${questionId}/${answerId}`, source);
    }
}
