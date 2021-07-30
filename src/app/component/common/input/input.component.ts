import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputComponent {

  @Input()
  value: string = '';

  @Input()
  controlName: string = '';

  @Input()
  type: 'text' | 'number' | 'email' = 'text';

  @Input()
  placeholder: string = 'placeholder';

  @Input()
  errorMessage: string = 'error';

  @Input()
  error: boolean = false;

  @Output()
  onValueChange: EventEmitter<any> = new EventEmitter<any>();

  parentForm: FormGroup;

  constructor(private readonly fgDir: FormGroupDirective) {
    this.parentForm = fgDir.form;
  }
}
