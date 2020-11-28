import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';
import { User } from 'src/app/models/user';
import { TaskService } from 'src/app/services/task.service';
import { WhiteSpaceValidators } from 'src/app/validators/whiteSpaceValidators';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTaskForm: FormGroup;
  task: Task;
  noteId: number;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService,
    public dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,) {
      this.noteId = data;
     }

  ngOnInit(): void {
    this.buildNewTaskForm();
  }

  buildNewTaskForm() {
    this.newTaskForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      description: [''],
      finished: [false]
    });
  }

  saveTask() {
    if(this.newTaskForm.dirty && this.newTaskForm.valid) {
      const task: Task = Object.assign({}, this.task, this.newTaskForm.value);
      let user: User = JSON.parse(JSON.parse(localStorage.getItem('user')));
      task.userCreate = user.id;
      task.noteId = this.noteId;
      this.taskService.postTask(task).subscribe(
        resp => {
          this.dialogRef.close();
        }
      )
    }else if(!this.newTaskForm.dirty){
      this.newTaskForm.reset();
    }
  }

}
