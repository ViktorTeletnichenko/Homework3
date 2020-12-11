let arr = [];

 let index = 0;
 while(index >= 0) {
  let digit = +prompt('enter a digit');
     if (isNaN(digit)) {
         break;
     }
     arr[index] = digit;
     index++;
 }
 let res = []
 if (arr.length % 2 !== 0) {  
    for (let i = 0; i < arr.length - 1; i += 2) {
       res.push(arr[i + 1]);
       res.push(arr[i]);
    }
      res.push(arr[arr.length - 1]);
    } else {  
    for (let i = 0; i < arr.length; i += 2) {
       res.push(arr[i + 1]);
       res.push(arr[i]);
    }
    }
    alert (res)