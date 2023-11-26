import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "./task";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  readonly baseUrl = 'http://localhost:39448/todos';

  constructor(
    private http: HttpClient,
  ) { }

  public index(archived = false): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl, {
      params: {
        archived: archived,
        _sort: 'id',
        _order: 'desc',
      }
    })
  }

  public post(task: Task): Observable<Task> {
    return this.http.post(this.baseUrl, task);
  }

  public put(task: Task): Observable<Task> {
    const url = this.baseUrl + '/' + task.id;
    return this.http.put(url, task);
  }

  public delete(task: Task): Observable<any> {
    const url = this.baseUrl + '/' + task.id;
    return this.http.delete(url);
  }
}