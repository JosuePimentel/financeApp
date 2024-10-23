import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type tipo = 'password' | 'username';

@Component({
  selector: 'app-input-text-generic',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './input-text-generic.component.html',
  host: {
    class: 'block w-full relative'
  }
})
export class InputTextGenericComponent implements OnInit {
  @Input({ required: true }) type!: tipo;
  @Input() text: string = '';
  isPasswordInput: boolean = false;
  showPassword: boolean = false;
  value = '';

  @Output() sendValueInput = new EventEmitter<string>();

  ngOnInit(): void {
    if(this.type == "password")
      this.isPasswordInput = true;
  }

  sendInput() {
    this.sendValueInput.emit(this.value);
  }

  showPasswordFn() {
    this.showPassword = !this.showPassword;
  }
}
