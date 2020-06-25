import { APIService } from './API.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'myAmplifyProject';
  todos: Array<any>;

  constructor(private apiService: APIService) {}

  createTodo() {
    this.apiService.CreateTodo({
        name: 'Angular',
        description: 'testing'
    });
  }

  async ngOnInit() {
    this.apiService.ListTodos().then((evt) => {
      this.todos = evt.items;
    });

    this.apiService.OnCreateTodoListener.subscribe((evt) => {
      const data = (evt as any).value.data.onCreateTodo;
      this.todos = [...this.todos, data];
    });
  }
}
