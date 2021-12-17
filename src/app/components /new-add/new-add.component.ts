import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-add',
  templateUrl: './new-add.component.html',
  styleUrls: ['./new-add.component.scss']
})
export class NewAddComponent implements OnInit {

  displayForm:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  generateForm():Boolean{
    this.displayForm = true;
    console.log(this.displayForm);
    
     return this.displayForm;
  }

}
