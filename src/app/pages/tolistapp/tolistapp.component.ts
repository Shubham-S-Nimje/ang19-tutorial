import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tolistapp',
  imports: [FormsModule],
  templateUrl: './tolistapp.component.html',
  styleUrl: './tolistapp.component.css',
})
export class TolistappComponent {
  task = '';
  error = '';
  dateTime = '';
  taskList: { id: number; task: string; date: string }[] = [];

  addTaskHandler() {
    if (!this.task) {
      this.error = 'Please enter a task';
      return;
    } else if (this.dateTime === '') {
      this.error = 'Please select a date and time';
      return;
    }

    const newTask = {
      id: this.taskList.length + 1,
      task: this.task,
      date: this.dateTime,
    };
    this.taskList.push(newTask);
    console.log('taskList:', this.taskList);
    this.task = '';
  }

  deleteTaskHandler(id: number) {
    this.taskList = this.taskList.filter((task) => task.id !== id);
  }
}
