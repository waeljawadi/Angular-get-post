import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {  ItemsService } from '../services/items.service';
import {Itemmm } from '../item';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor(private itemsservice : ItemsService) { }
public date = Date.now();



public element = [];
public bindpassword;
public bindemail;
public bindchois;
public item_model:Itemmm ;
tab_of_items = [];

  ngOnInit() {
return this.itemsservice.getitems().subscribe( data => this.tab_of_items = data )
  }
  onSubmit()
  {
    this.item_model = new Itemmm(this.date,this.bindemail,this.bindpassword,this.bindchois);
    return this.itemsservice.postitems(this.item_model).subscribe(
    data => console.log("succes",data)
    )

  }

}
