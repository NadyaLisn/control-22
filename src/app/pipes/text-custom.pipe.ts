import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCustomPipe',
  standalone: true
})
export class TextCustomPipe implements PipeTransform {

  transform(value: string, limit: number = 95): string {
    if (value.length <= limit) {
      return value;
    } else {
      return value.substring(0, limit) + '...';
    }
  }
}
