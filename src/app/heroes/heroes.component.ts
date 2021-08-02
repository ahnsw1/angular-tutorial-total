import { Hero } from './../Hero';
import { Component, OnInit } from '@angular/core';

@Component({ // - 클래스에 메타데이터를 지정해서 Angular 컴포넌트로 선언하는 데코레이터 함수
  selector: 'app-heroes', // - 컴포넌트의 css 엘리먼트 셀렉터
  templateUrl: './heroes.component.html', // - 컴포넌트 템플릿 파일의 위치
  styleUrls: ['./heroes.component.css'] // - 컴포넌트 css 스타일 파일의 위치
})
export class HeroesComponent implements OnInit { // - 컴포넌트는 반드시 export 해야 AppModule과 같은 다른 모듈에서 import 할 수 있다.

  title = "Windstorm";
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit(): void { // - 라이프싸이클 후킹 함수. Angular는 컴포넌트를 생성한 직후에 ngOnInit를 호출한다.
  }

}
