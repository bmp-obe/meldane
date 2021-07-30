import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  label: string = '';

  @Input()
  customClasses: string = '';

  @Output()
  readonly buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  buttonClick(): void {
    this.buttonClicked.emit();
  }
}
