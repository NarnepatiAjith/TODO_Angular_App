import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public task="";

  list:any[]=[];

  addTask(item:string){
       
       this.list.push({id:this.list.length,name:item})
       console.warn(item)
  }

  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
