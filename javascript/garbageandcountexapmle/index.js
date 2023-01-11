//////why addeventlisters are need to remove from the btrowser because they are very heavy and consumes lot of momory .
//suppose if a page is having mainy btns and many event listeners then it maight make page very slow 

function countchecker(){
    let count=0;
     document.getElementById("btn").addEventListener("click",function(){
        console.log("button is cliced",count++);
    })
}
countchecker();