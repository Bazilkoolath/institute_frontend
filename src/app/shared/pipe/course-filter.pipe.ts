import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(items: any[], course: string): any[] {
    if (!items) {
      return items;
    }
    if (!course) {
      return items;
    }
    return items.filter((i:any) => {
      let res = i?.course==course?i:""
      return res
    });
  }

}
