

 let request = new XMLHttpRequest();

 request.open("GET","https://restcountries.com/v2/all");

 request.onload = ()=> {
     let a = JSON.parse(request.response);
     let i;
 for(i = 0; i < a.length; i++){
     console.log(a[i].flags.svg);
 }
 };

 request.onerror = (er)=> {
     console.log(request.response);
     console.log(request.responseText);
     console.log(request.status);
 }

 request.send();




