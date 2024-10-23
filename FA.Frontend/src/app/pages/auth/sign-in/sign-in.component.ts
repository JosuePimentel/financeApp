import { Component } from '@angular/core';
import { ButtonGenericComponent } from '../../../components/button-generic/button-generic.component';
import { InputTextGenericComponent } from '../../../components/input-text-generic/input-text-generic.component';
import { LogoComponent } from '../../../components/logo/logo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    LogoComponent,
    InputTextGenericComponent,
    ButtonGenericComponent,
  ],
  templateUrl: './sign-in.component.html',
  host: {
    class: 'min-h-dvh bg-BACKGROUND flex w-screen flex-col pt-[30px] px-[59px]'
  }
})
export class SignInComponent {
  constructor(public readonly _router: Router) {}
}
