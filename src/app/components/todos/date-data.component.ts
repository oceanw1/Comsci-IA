import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-data',
  templateUrl: './date-data.component.html',
  styleUrls: ['./date-data.component.css'],
})
export class DateDataComponent implements OnInit {
  todos: todo[] | undefined;
  inputTodo: string | undefined;

  date: date[] | undefined;
  inputDate: string | undefined;

  employees: employees[] | undefined;
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'First todo', completed: false },
      { content: 'Second todo', completed: false },
    ];

    this.employees = ['lydia', 'Iiling', 'Nadia'];
  }

  emploo;

  addemployee(employeeName) {
    this.employees.push(employeeName);
  }

  setDate() {
    this.date = this.date;
  }

  getDate(string: Date) {
    return this.date;
  }

  toggleDone(id: number) {
    this.todos?.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      {
        return v;
      }
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos?.filter((v, i) => i !== id);
  }

  addDate() {
    this.date?.push({
      content: this.date,
      taken: true,
    });
    this.inputDate = '';
  }
}
