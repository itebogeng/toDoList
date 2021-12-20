import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

@Input()

export class FormComponent implements OnInit {


  formDisplay=new FormGroup({
    taskName:new FormControl(''),
    taskTime:new FormControl(''),
    
  })
  constructor() { }

  



  ngOnInit(): void {
  }

}
