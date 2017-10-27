function sortByHeight(a) {
    var length = a.length;
    var buff = -1;
    var temp;
    for ( var outer = length; outer >= 2; outer --) {
       for (let i = 0; i <= length - 1; i++) {
           
          if(a[i] === -1){ continue; }
          
          if(a[i] > -1 && buff === -1) {
              buff = i;
              continue;
          }
          if(a[i] > a[buff]) { buff = i; continue;}
          if(a[i] < a[buff]) {
            temp = a[i];
            a[i] = a[buff];
            a[buff] = temp;
            buff = i;
          }
       }
       buff = -1;
       console.log(a)
    }
    return a;
 }
 a = [4, 2, 9, 11, 2, 16]
 sortByHeight(a)