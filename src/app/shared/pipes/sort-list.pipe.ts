import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList',
  standalone: true
})
export class SortListPipe implements PipeTransform {

  transform(value:any[],sortString:any,order:string): any[] {
   
    let toggleOrder=1;
    if(order==='desc'){
      toggleOrder=-1;
    }
     
    
    
    value.sort((obj1:any,obj2:any)=>{
      
      
      
      if(obj1[sortString]>obj2[sortString]){
        
        
        
        return 1*toggleOrder;
      }
      else if(obj1[sortString]<obj2[sortString]){
        
        
        return -1*toggleOrder;
      }
      else{
        return 0;
      }
    })
    
    
    return value;
    
  }

}
