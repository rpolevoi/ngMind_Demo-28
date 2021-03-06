import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `<h4>{{childProp.name}} from {{childProp.city}}, {{childProp.country}} -- id:{{childProp.id}}
            <button (click)="onClick()">select</button></h4>
            `
})
export class ChildComponent {
  
  @Input() childProp;
  @Output() emitter = new EventEmitter;
  
  onClick() {this.emitter.emit(this.childProp);}
 
}
