import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LogoComponent } from '../../../components/logo/logo.component';
import { InputTextGenericComponent } from '../../../components/input-text-generic/input-text-generic.component';
import { ButtonGenericComponent } from '../../../components/button-generic/button-generic.component';
import { Router } from '@angular/router';
import { NavigatenModel } from '../../../module/model/navigate';

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
  navigate: NavigatenModel = new NavigatenModel(this._router, this.platformId);

  constructor(private readonly _router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}
}
