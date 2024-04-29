let titles=document.querySelector(".head")
let turn="X";
let templetess=document.querySelectorAll(".templetes")
let itemes=[];
function end(num1,num2,num3){
    titles.innerHTML=`${itemes[num1]} winner`
    document.getElementById('item'+num1).style.backgroundColor="red";
    document.getElementById('item'+num2).style.backgroundColor="red";
    document.getElementById('item'+num3).style.backgroundColor="red";
    setInterval(function(){titles.innerHTML+="."},1000)
    setTimeout(function(){location.reload()},4000)

}
function winner(){
for(i=1;i<10;i++){
    itemes[i]=document.getElementById("item"+i).innerHTML;
}
if(itemes[1] == itemes[2] && itemes[2] == itemes[3] && itemes[1]!=""){end(1,2,3)}
else if(itemes[4] == itemes[5] && itemes[5] == itemes[6] && itemes[5]!=""){end(4,5,6)}
else if(itemes[7] == itemes[8] && itemes[8] == itemes[9] && itemes[8]!=""){end(7,8,9)}
else if(itemes[1] == itemes[4] && itemes[4] == itemes[7] && itemes[1]!=""){end(1,4,7)}
else if(itemes[2] == itemes[5] && itemes[5] == itemes[8] && itemes[5]!=""){end(5,8,2)}
else if(itemes[3] == itemes[6] && itemes[6] == itemes[9] && itemes[6]!=""){end(3,6,9)}
else if(itemes[1] == itemes[5] && itemes[5] == itemes[9] && itemes[5]!=""){end(9,5,1)}
else if(itemes[3] == itemes[5] && itemes[5] == itemes[7] && itemes[5]!=""){end(5,7,3)}
}
templetess.forEach(function(templet){
templet.addEventListener("click",function(e){
    let element=document.getElementById(e.target.id)
    if(turn=="X" && element.innerHTML==""){
        element.innerHTML="X"
        turn="O"
        titles.innerHTML="O"
        titles.style.color='chartreuse'

    }else if(turn=="O" && element.innerHTML==""){
        element.innerHTML="O"
        turn="X"
        titles.innerHTML="X"
        titles.style.color='chartreuse'
    }
    winner()
})
})
