import { Component } from '@angular/core';

export class OppiHoek {
  constructor(
    public name: string,
    public email: string,
    public number: string,
  ) { }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model = new OppiHoek('', '', '');

  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.model)
  }

}
