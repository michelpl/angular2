import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'teste',
  template: `
    <h2>{{ola}}</h2>
  `
})
export class TesteComponent {
  ola = 'Olá';
}

