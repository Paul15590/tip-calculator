// alert("This is calculator tip project" );

//selecting all elements 

const billInput = document.getElementById("bill");
const fivePerctg =document.getElementById("five-perctg");
const tenPerctg = document.getElementById("ten-perctg");
const twntyfivePerctg =document.getElementById("twntyfive-perctg");
const fiftyPerctg =document.getElementById("fifty-perctg");
const custom =document.getElementById("custom");
const person =document.getElementById("person");
const tipAmount =document.getElementById("tip-amount");
var totalAmount =document.getElementById("total-amount");
const reset =document.getElementById("reset");
const fifteen =document.getElementById("fifteen");

const billAmount =billInput.value;
const people= person.value;
const btnButtons = [fivePerctg,tenPerctg,twntyfivePerctg,fiftyPerctg,fifteen];
// var btnButtons=document.getElementsByClassName("btn");
// const paul = document.getElementById("paul");



    btnButtons.forEach(function(btn,index){
        btn.onclick=function(){
            const billAmount =billInput.value;
            const people= person.value;
            let btnToNum=parseInt(btn.innerText)/100;
            let newTotalAmount=billAmount/people;
            totalAmount.innerHTML=newTotalAmount +( newTotalAmount*btnToNum);
            tipAmount.innerHTML= newTotalAmount*btnToNum;
           tipAmount.style.color="hsl(172, 67%, 45%)";
           totalAmount.style.color="hsl(172, 67%, 45%)";
        }
    })

    reset.onclick=function(){
            tipAmount.innerText=0;
            totalAmount.innerText=0;
            person.value=null;
            billInput.value=null;
            custom.value=null;
            
    }

    custom.onkeydown=function(){
        const billAmount =billInput.value;
        const people= person.value;
        let newTotalAmount=billAmount/people;
        let newCustom=custom.value/100;
        
        totalAmount.innerHTML=newTotalAmount +( newTotalAmount*newCustom);
        tipAmount.innerHTML= newTotalAmount*newCustom;
    }