const editableInput=document.querySelector('.editable')
//console.log(editableInput)

const placeHolder=document.querySelector('.placeholder')
//console.log(placeHolder)
// veri aldığımız elemana tıklanıldığında  rengini değiştirdik
// bunu da js kısmına editableınputu çekerek onfocus eventi ekledik onfocus olduğunda yani tıklanılıp orda kaldığında stilinin rengi #c5ccd3 olsun dedik
const counter=document.querySelector('.counter')
//console.log(counter)
const tweetButton=document.querySelector('.button')
//console.log(tweetButton)

const readonly=document.querySelector('.readonly')
console.log(readonly)

editableInput.onfocus=()=>{  
    placeHolder.style.color='#c5ccd3'           
}
// odaklanılan elemandan cıkıldığında etkilenir
editableInput.onblur=()=>{
    placeHolder.style.color='#98a5b1'
}

// klavye etkinliğini yakalamak için

editableInput.onkeypress=(e)=>{
    //console.log(e)
    placeHolder.style.display='none'
}

editableInput.onkeyup=(e)=>{
   //placeHolder.style.display='flex' 
   validateTweet(e.target)
}

const validateTweet=(element)=>{
    let text;
    let tweetLimit=5;

    let tweetLengt=element.innerText.length
    // console.log(tweetLengt)

    if(tweetLengt <=0){
        placeHolder.style.display='block'
        counter.style.display='none'
        tweetButton.classList.remove('active')
            }else{
                tweetButton.classList.add('active')
                counter.style.display='block'
                placeHolder.style.display='none'
                counter.style.color='#e0245e'
            }

           counter.innerText=tweetLimit-tweetLengt

           if(tweetLengt>tweetLimit){

            let overText=element.innerText.substr(5,tweetLengt)

            console.log(overText)

            overText=`<span class='overSpan'>${overText}</span>`
            text=element.innerText.substr(0,tweetLimit)+overText
            readonly.style.zIndex='1'

            tweetButton.classList.remove('active')

            counter.style.color='#e0245e'


           }else{
            counter.style.color='#333'
           }

           readonly.innerHTML=text
};


