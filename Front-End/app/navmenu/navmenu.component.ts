import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
    selector: 'nav-menu',
    templateUrl: './app/navmenu/navmenu.component.html',
    styleUrls: ['./app/navmenu/navmenu.component.css'],
})

export class NavMenuComponent {

    constructor(private _router: Router)
    {

    }
}