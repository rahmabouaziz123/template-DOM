
 var btnPlusArray=document.getElementsByClassName('plus')
console.log(btnPlusArray);

for(var i=0;i<btnPlusArray.length;i++)
{
    btnPlusArray[i].addEventListener("click",increment)
}


function increment(event){
        
    //console.log(event);
    const btnPlus =event.target;

    

    const divElt= btnPlus.parentElement
   //
   const quantityTag =divElt.querySelector("p");
   //
   var quantityValue= parseInt(quantityTag.innerHTML)

   //
   quantityValue++
   //console.log(quantityValue)
   //
   quantityTag.innerHTML=quantityValue
            //ona terminer lincrementation contenie de tag p

   const trElement=divElt.parentElement.parentElement
   //
   const unitePriceVal=Number(trElement.querySelector(".unitePrice").innerHTML)
  // 
  const priceTag=trElement.querySelector(".price")
  //priceValue contient 0
  var priceValue=Number(priceTag.innerHTML)
 //
var priceValue=quantityValue*unitePriceVal
 //
 priceTag.innerHTML=priceValue
 
}


//*****************************************fin function incrementation "+" et calcul produit total "+ "****************************** */

var buttonMoins=document.getElementsByClassName("minus")
console.log(buttonMoins);


for(var i=0;i<buttonMoins.length;i++){
    buttonMoins[i].addEventListener("click",decrement);
}

function decrement(event){
    var btnMinus=event.target;
    //console.log(btnMinus);
    var divParent=btnMinus.parentElement
    var chilP=divParent.querySelector("p")
    // console.log(chilP);
    var valueP= parseInt(chilP.innerHTML);
   // console.log(valueP);
     valueP--
   //console.log(valueP)
      if(chilP.innerHTML!=0)
   {chilP.innerHTML=valueP}

   ////////modification prix =>price
   var parentPriceTr=divParent.parentElement.parentElement
   var UnitePrice=parentPriceTr.querySelector(".unitePrice")
   var quantiteUnitePrise=parseInt(UnitePrice.innerHTML)
   var childTr= parentPriceTr.querySelector(".price")
   var valuePrice=parseInt(childTr.innerHTML)
   //console.log(valuePrice)
   var valuePrice=valueP*quantiteUnitePrise
   if(valueP>=0)
   {childTr.innerHTML=valuePrice}



}


////////////////////////////////////////////////////////buuton like ////////////

var btnLike=document.getElementsByClassName("like")
for(var i=0;i<btnLike.length;i++){
    btnLike[i].addEventListener("click",colorLike)
}

function colorLike(event){
    var btnLike1=event.target;
var verfiy=true
verfiy=!verfiy
console.log(verfiy);
  
btnLike1.style.color = 'black'
     //console.log(res );

     if(btnLike1.style.color == 'red'){
        btnLike1.style.color = 'black'
       }
       if(btnLike1.style.color == 'black' )
       {
        btnLike1.style.color = 'red' 
       }
       

}

/////////////////////////////////////////// button supprime/////////////////////

var btnDelete=document.getElementsByClassName("delete")
for(var i=0;i<btnDelete.length;i++){
    btnDelete[i].addEventListener("click",deleteRow)
}

function deleteRow(event){
    var btnDelEl=event.target
   // console.log(btnDelEl);
   var tagtr=btnDelEl.parentElement.parentElement.parentElement.parentElement
   console.log(tagtr)
//    var trelementPar=tagtr.querySelectorAll("tr")
//   // console.log(trelementPar)

        //toujour remove 1 element dr tr sachant que la debut =>0
      var removeelem=tagtr.remove()
    //   console.log(removeelem);
    


 


}


//////////////////////////////////button total////////////
var btnTotal=document.getElementsByClassName("checkbox")
//console.log("btnTotal")
for(var i=0;i<btnTotal.length;i++)
{
    btnTotal[i].addEventListener("click",sum)
}




function sum(event){
    const checkboxElement=event.target;
    console.log(checkboxElement);
    const priceValue=Number(checkboxElement.parentElement.parentElement.querySelector(".price").innerHTML)
    
    //console.log(priceValue);
    var totalTag=document.querySelector("#total")
    var totalValue=parseInt(totalTag.innerHTML)
    //console.log(totalValue)
    const btnPlus=checkboxElement.parentElement.parentElement.querySelector(".plus")
    console.log(btnPlus);
    const btnMinus=checkboxElement.parentElement.parentElement.querySelector(".minus")

    if(checkboxElement.checked==true){
        totalValue+=priceValue
        totalTag.innerHTML=totalValue
        btnPlus.setAttribute("disabled",true)
        btnMinus.setAttribute("disabled",true)

    }
    else{
        totalValue-=priceValue
        totalTag.innerHTML=totalValue
        btnPlus.removeAttribute("disabled")
        btnMinus.removeAttribute("disabled")
    }


}