console.log(21&&11&&0||2&&9||89&&10);
     //     0||9||10
     //9
     console.log(21&&11&&0||2==9||89&&10);
     ///////// 0 ||false||10
     /////// 10
     console.log(21&&11&&123&&0||2==9||89&&10||12&&90||78&&10);
     ///           0||false||90||10
             //  10
 ///////declare a new array
     var arr=new Array(1,2,3);
     console.log(arr);  
     
     ///declare a 2d array in js
     var newarr=new Array(2);
  for (var i=0;i<newarr.length;i++){
    newarr[i]=new Array(2);
  }
  var h=0;
  for(var i=0;i<2;i++){
    for(var j=0;j<2;j++){
        newarr[i][j]=h++;
    }
  }

  for(var i=0;i<2;i++){
    for(var j=0;j<2;j++){
        console.log(newarr[i][j]+' ')+"\n";
    }
   
  }
  ////////////////big int
  var val=1000+1908978**2-10;
  console.log(val,val+100);

     
     

