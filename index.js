let string="";
let buttons=document.querySelectorAll('.nums');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            // string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else{
            string+=e.target.innerHTML;
            document.querySelector('input').value=string;

        }

        
    })
})
