import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit  {


  ngOnInit(): void {

    $('.menu-toggle').click(function() {
        $(this).next('.menu-sub').toggleClass('active');
    });
}

}
