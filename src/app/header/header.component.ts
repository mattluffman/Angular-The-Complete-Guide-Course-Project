import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    collapsed = true; // for hamburger menu
    @Output() navItemClicked = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    /**
     * sents event to notifiy app that a link has been clicked
     * @param linkName
     */
    onNavClick(linkName: string): void {
        this.navItemClicked.emit(linkName);
    }
}
