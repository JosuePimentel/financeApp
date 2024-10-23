import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-generic',
  standalone: true,
  imports: [],
  templateUrl: './button-generic.component.html',
  host: {
    class: 'block'
  }
})
export class ButtonGenericComponent {
  @Input({ required: true }) text: string = '';
  @Input() width: string = '';
  @Output() clickBtn = new EventEmitter<undefined>();

  clickBtnFn() {
    this.clickBtn.emit();
  }
}
