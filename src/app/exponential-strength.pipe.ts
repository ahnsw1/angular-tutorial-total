import { Pipe, PipeTransform } from '@angular/core';

/**
 * 히어로의 힘을 증폭시킨다.
 * 증폭값은 파이프 인자로 전달하며, 기본값은 1이다.
 * 사용방법: {{2 | exponentialStrength: 10}}
 * 
 */
@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent = 1): number { // - value는 2(표현하고 싶은 값), exponent는 10(파이프로 전달된 값).
    return Math.pow(value, exponent);
  }
}
