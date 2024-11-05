var form=document.querySelector(".form");
 form.addEventListener("submit",(e)=>{
     e.preventDefault();
     valid();
     mortagetype();
 });
function valid(){
    var amount=document.querySelector(".amount");
    var ee=document.querySelector(".£");
    var erroramount=document.querySelector(".error-amount");
    var term=document.querySelector(".term");
    var years=document.querySelector(".years");
    var errorterm=document.querySelector(".error-term");
    var rate=document.querySelector(".rate");
    var intere=document.querySelector(".intere");
    var errorrate=document.querySelector(".error-rate");
    if(amount.value ==="" || term.value ==="" || rate.value ===""){
        amount.style.borderColor="hsl(4, 69%, 50%)";
        ee.style.backgroundColor="hsl(4, 69%, 50%)";
        erroramount.innerHTML="This is field required";
        term.style.borderColor="hsl(4, 69%, 50%)";
        years.style.backgroundColor="hsl(4, 69%, 50%)";
        errorterm.innerHTML="This is field required";
        rate.style.borderColor="hsl(4, 69%, 50%)";
        intere.style.backgroundColor="hsl(4, 69%, 50%)";
        errorrate.innerHTML="This is field required";
    }else{
        amount.style.borderColor=" ";
        ee.style.backgroundColor=" ";
        erroramount.innerHTML=" ";
        term.style.borderColor=" ";
        years.style.backgroundColor=" ";
        errorterm.innerHTML=" ";
        rate.style.borderColor=" ";
        intere.style.backgroundColor=" ";
        errorrate.innerHTML=" ";
    }
}

function mortagetype(){
    var amount=parseFloat(document.querySelector(".amount").value);
    var term=parseFloat(document.querySelector(".term").value) * 12;
    var rate=parseInt(document.querySelector(".rate").value) / 100 / 12;
    var repaymenttype = document.querySelector("input[name='repaymentType']").value;
    var yourresult=document.querySelector(".your-result");
    var repaymentmonthe=document.querySelector(".repayment-monthe");
    var repaymenttotal=document.querySelector(".repayment-total");

    if(repaymenttype === "repayment"){
        var monthepayment=(amount * rate) / (1- Math.pow(1 + rate , -term));
        var totalpayment=monthepayment * term;
        yourresult.style.display="flex";
        repaymentmonthe.innerHTML="£" + monthepayment.toFixed(2);
       repaymenttotal.innerHTML="£" + totalpayment.toFixed(2);

    }else if(repaymenttype === "interest-only"){
        var monthinterest= amount * rate;
        var totalinteresr=  monthinterest * term;
        yourresult.style.display="flex";
        repaymentmonthe.innerHTML="£" + monthinterest.toFixed(2);
        repaymenttotal.innerHTML="£" + totalinteresr.toFixed(2);
    }
}
var repayt=document.getElementById("repayt"); 
repayt.addEventListener("click",()=>{
    repayt.style.backgroundColor="hsla(61, 70%, 52%, 0.486)";
    repayt.style.borderColor="hsl(61, 70%, 52%)";
    inter.style.backgroundColor="";
    inter.style.borderColor="";
})
var inter=document.getElementById("inter");
inter.addEventListener("click",()=>{
    inter.style.backgroundColor="hsla(61, 70%, 52%, 0.486)";
    inter.style.borderColor="hsl(61, 70%, 52%)";
    repayt.style.backgroundColor="";
    repayt.style.borderColor="";
})
var clear=document.querySelector(".clear");
clear.addEventListener("click",()=>{
    var amount=document.querySelector(".amount");
    var ee=document.querySelector(".£");
    var erroramount=document.querySelector(".error-amount");
    var term=document.querySelector(".term");
    var years=document.querySelector(".years");
    var errorterm=document.querySelector(".error-term");
    var rate=document.querySelector(".rate");
    var intere=document.querySelector(".intere");
    var errorrate=document.querySelector(".error-rate");
    var yourresult=document.querySelector(".your-result");
    document.querySelectorAll("input[name='repaymentType']").forEach((radio)=>{
        radio.checked=false;
    })
    amount.value="";
    term.value="";
    rate.value="";
    inter.style.backgroundColor="";
    inter.style.borderColor="";
    repayt.style.backgroundColor="";
    repayt.style.borderColor="";
    amount.style.borderColor=" ";
        ee.style.backgroundColor=" ";
        erroramount.innerHTML=" ";
        term.style.borderColor=" ";
        years.style.backgroundColor=" ";
        errorterm.innerHTML=" ";
        rate.style.borderColor=" ";
        intere.style.backgroundColor=" ";
        errorrate.innerHTML=" ";
        yourresult.style.display="none";

})
