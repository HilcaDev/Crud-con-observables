import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor() { }

  @ViewChild('buttonCloseModal') buttonModal!: ElementRef;

  @Input() idModal!: string;
  @Input() modalTitle!: string;
  @Input() modalLarge: boolean = false;

  closeModal(): void {
    this.buttonModal.nativeElement.click();
  }

}
