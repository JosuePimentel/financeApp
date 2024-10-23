import { Component } from '@angular/core';
import { LogoComponent } from '../../../components/logo/logo.component';
import { InputTextGenericComponent } from '../../../components/input-text-generic/input-text-generic.component';
import { ButtonGenericComponent } from '../../../components/button-generic/button-generic.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LogoComponent,
    InputTextGenericComponent,
    ButtonGenericComponent
  ],
  templateUrl: './login.component.html',
  host: {
    class: 'min-h-dvh bg-BACKGROUND flex w-screen flex-col pt-[30px] px-[59px]'
  }
})
export class LoginComponent {
  constructor(public readonly _router: Router) {}
}
