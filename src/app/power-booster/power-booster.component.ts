import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-booster',
  template: `
    <h2>Power Boost Calculator</h2>
    <label for="power-input">Normal power: </label>
    <input id="power-input" type="text" [(ngModel)]="power">
    <label for="boost-input">Boost factor: </label>
    <input id="boost-input" type="text" [(ngModel)]="factor">
    <!-- 
      - ngModel로 양방향 바인딩을 연결하면 power, factor 값을 변경할 때마다 실행되는 것을 확인할 수 있다. 
        Angular는 인자값이 변경되거나 참조 객체가 변경되는 것을 감지할 때마다 파이프 함수를 다시 실행한다.
          1. 객체 안에 있는 데이터가 변경되는 경우?
          2. 순수하지 않은 파이프를 어떻게 사용하는지?
    -->
    <p>
      Super Hero Power: {{power | exponentialStrength: factor}}
    </p>
  `,
})
export class PowerBoosterComponent {
  power: number = 5;
  factor: number = 1;
}
