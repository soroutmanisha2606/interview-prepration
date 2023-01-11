
// revstr("hello");
//by using builtin method-1split()  2rev()  3 join()
//split method -is u    sed to split string in form of array obj like=["h","e","l","l","o"]

function revstrusingbuiltin(str){
    //1.split
    let split_array=str.split("");
    //revserse
    let resverse_array=split_array.reverse();
    //join (to join array elements into astring itself)
    let joinarray=resverse_array.join("");
    return joinarray;
};
revstrusingbuiltin("mannu");
//console.log(revstrusingbuiltin("mannu"))
/////////////////using itratecvily
function itratestring(str){
    var newstr="";
    for(var i=str.length-1;i>=0;i--){
        newstr+=str[i];

    }
return newstr;
}

console.log(itratestring('hellobyirate'))
function revesrebyrecursion(str){
    if(str==="")return "";
    else{
   return  revesrebyrecursion(str.substr())+str;

    } 
}
console.log(revesrebyrecursion("helloo"))
