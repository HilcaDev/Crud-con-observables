import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [
  ]
})
export class ContentComponent {
  @Input() title!: string;
}
