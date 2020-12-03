import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Question} from '../models/dto/question-dto.model';

@Injectable()
export class QuestionService {

    private url = `${environment.baseUrl}/api/Question`;

    constructor(private http: HttpClient) { }

    public getSources(): Observable<Question[]> {
        return this.http.get<Question[]>(`${this.url}`);
    }

    public getSource(id: number): Observable<Question> {
        return this.http.get<Question>(`${this.url}/${id}`);
    }

    public createSource(source: Question): Observable<number> {
        return this.http.post<number>(this.url, source);
    }

    public updateSource(id: number, source: Question): Observable<void> {
        return this.http.put<void>(`${this.url}/${id}`, source);
    }

    public deleteSource(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
}
