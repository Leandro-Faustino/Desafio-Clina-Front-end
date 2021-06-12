import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'periodo'
})

export class ObjToArrayPipe implements PipeTransform{

  transform( objeto:any = []): any{
    return Object.values(objeto)
  };
}
