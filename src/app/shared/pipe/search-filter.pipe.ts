import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText?.toLocaleLowerCase();
    return items.filter((i:any) => {
      let res = i?.brand_name?i?.brand_name:i?.name
      if (res.includes("-")) {
        res= res.replaceAll("-"," ")
      }
      return res?.toLocaleLowerCase()?.startsWith(searchText);
    });
  }
}
