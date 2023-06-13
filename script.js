let cel=document.getElementById('cel');
        let fah=document.getElementById('fah');
        let kel=document.getElementById('kel');
         
      

cel.addEventListener("focus",focusstyle);
cel.addEventListener("blur",blurstyle);
fah.addEventListener("focus",focusstyle);
fah.addEventListener("blur",blurstyle);
kel.addEventListener("focus",focusstyle);
kel.addEventListener("blur",blurstyle);
function focusstyle(){
    cel.style.background='orange';
    kel.style.background='green';
    fah.style.background='white';
}
function blurstyle(){
    cel.style.background='white';
    kel.style.background='white';
    fah.style.background='white';
}



        cel.addEventListener('input',function(){
            let c=this.value;
            let f=(c * 9/5) + 32;
            if(!Number.isInteger(f)){
               f = f.toFixed(4);
            }
            fah.value=f;

            // let ke= c + 273.15;
            // if(!Number.isInteger(ke)){
            //     ke.toFixed(4);
            // }
            // kel.value=ke;

            
        // let kell=(c+ 273.15);
        // if(!Number.isInteger(kell)){
        //         kell.toFixed(4);
        //     }
        //     kel.value=kell;

        let k = (parseFloat(this.value) + 273.15);
        kel.value = parseFloat(k.toFixed(2));

        })



       fah.addEventListener('input',function(){
        let f=this.value;
        let c=(f - 32) * 5/9;
        if(!Number.isInteger(c)){
              c =  c.toFixed(4);
            }
        cel.value=c;

        let ke=(f - 32) * 5/9 + 273.15;
        if(!Number.isInteger(ke)){
               ke = ke.toFixed(4);
            }
            kel.value=ke;
       })
         
       kel.addEventListener('input',function(){
        let k=this.value;
        let ce=k - 273.15;
        if(!Number.isInteger(ce)){
               ce = ce.toFixed(4);
            }
        cel.value=ce;


        let fe=(k- 273.15) * 9/5 + 32;
        if(!Number.isInteger(fe)){
               fe = fe.toFixed(4);
            }
            fah.value=fe;

       })