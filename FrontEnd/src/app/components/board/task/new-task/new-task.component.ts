import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { WhiteSpaceValidators } from 'src/app/validators/whiteSpaceValidators';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTaskForm: FormGroup;
  task: Task;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildNewTaskForm();
  }

  buildNewTaskForm() {
    this.newTaskForm = this.formBuilder.group({
      name: ['', [Validators.required, WhiteSpaceValidators.cannotContainSpace]],
      description: [''],
      finished: [false]
    });
  }

  saveTask() {
    if(this.newTaskForm.dirty && this.newTaskForm.valid) {
      const task = Object.assign({}, this.task, this.newTaskForm.value);
      debugger;
    }else if(!this.newTaskForm.dirty){
      this.newTaskForm.reset();
    }
  }

}
