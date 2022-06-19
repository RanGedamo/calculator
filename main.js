let buttons = Array.from(document.getElementsByTagName("button"));
let screen = document.getElementById("result")
console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener("click",(e)=>{
        switch(e.target.innerText){
            case'AC':
            screen.innerText= ''
                break;
            case"=":
            try {
                screen.innerText = eval(screen.innerText)
                break;
            }
            catch{
                screen.innerText = 'error'
                break;
            }
            default: 
            screen.innerText += e.target.innerText
            break;
        }
    })
});




