import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {QuestionDto} from '../models/dto/question-dto.model';

@Injectable()
export class QuestionService {

    private url = `${environment.baseUrl}/api/Question`;

    constructor(private http: HttpClient) { }

    public getSources(): Observable<QuestionDto[]> {
        return this.http.get<QuestionDto[]>(`${this.url}`);
    }

    public getSource(id: number): Observable<QuestionDto> {
        return this.http.get<QuestionDto>(`${this.url}/${id}`);
    }

    public createSource(source: QuestionDto): Observable<number> {
        return this.http.post<number>(this.url, source);
    }

    public updateSource(id: number, source: QuestionDto): Observable<void> {
        return this.http.put<void>(`${this.url}/${id}`, source);
    }

    public deleteSource(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
}
