const btnWatchMenu=document.getElementById('watchMenu')
const correncyBtn=document.querySelector('.currency')
const prices=document.querySelectorAll('.products-item-price')
const productsBtn=document.querySelectorAll('.product-btn')
const inpBurger=document.getElementById('burger')
const inpName=document.getElementById('name')
const inpPhone=document.getElementById('phone')
const btnOrder=document.getElementById('order-btn')
const titles=document.querySelectorAll('.products-item-title')
const input=document.querySelectorAll('input')

btnWatchMenu.onclick=()=>{
    document.getElementById('products').scrollIntoView({
        behavior:"smooth"
    })
}

correncyBtn.onclick=()=>{
    document.getElementById('products').scrollIntoView({
        behavior:"smooth"
    })
    console.log(correncyBtn.innerText);
    let currentCurrent=correncyBtn.innerText   //$


    let newCorensy='$'
    let kurs=0

    let newCorensy2='$'


    if(currentCurrent==='$'){
        newCorensy='€'
        kurs=0.91

        for(i=0; i<prices.length; i++){
            let basrPrice=prices[i].getAttribute('data-base-price')
            prices[i].innerText=basrPrice*kurs+' '+newCorensy
        }
    } else if(currentCurrent==='€'){
        newCorensy='som'
        kurs=90

        for(i=0; i<prices.length; i++){
            let basrPrice=prices[i].getAttribute('data-base-price')
            prices[i].innerText=basrPrice*kurs+' '+newCorensy
        }
    }else if(currentCurrent==='som'){
        newCorensy='$'
        kurs=1

        for(i=0; i<prices.length; i++){
            let basrPrice=prices[i].getAttribute('data-base-price')
            prices[i].innerText=basrPrice*kurs+' '+newCorensy
        }
    }

    correncyBtn.innerHTML=newCorensy
    
}

productsBtn.forEach((btn, i)=>{
    btn.onclick=()=>{
        document.getElementById('order').scrollIntoView({
            behavior:"smooth"
        })
        inpBurger.value=`${titles[i].innerText}-${prices[i].innerText}`

    }
})


btnOrder.onclick=()=>{ 
    if( input[2].value.trim().length>0 && input[1].value.trim().length>0 && input[0].value.trim().length>0){
        alert('Ваш заказ оформлен')
    }else{
        for (let i = 0; i < input.length; i++) {
            if (input[i].value.trim().length === 0) {
                input[i].style.borderColor = 'red';
            } else {
                input[i].style.borderColor = '';
            }
        }
    }
}