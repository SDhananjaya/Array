var a=new Array("1","2");
document.getElementById("array1").innerHTML="Starting array elements are : "+a;
a.pop();
document.getElementById("array2").innerHTML="After deleting '2' array elements are : "+a;

var data=[1,2,3,4,5]
 document.getElementById("mini").innerHTML=data+ Array.isArray(data);

 var data=[1,2,3,4,5,6];
 document.write("Data is : ")
 data.map(
    function(element){
        
     document.write(element+",") 
    }
 )



