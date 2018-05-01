import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'lazy-tabs',
  templateUrl: './lazy-tabs.component.html',
  styleUrls: ['./lazy-tabs.component.css']
})
export class LazyTabsComponent implements OnInit {

        selected: number = 0;
        @Output() onTabChanged: EventEmitter<number> = new EventEmitter();

        constructor() {}


        ngOnInit() {

            this.selected = 0;
            
        }

        tabChanged (index: number) {

              this.selected = index;
              this.onTabChanged.emit(index);

        }

}
