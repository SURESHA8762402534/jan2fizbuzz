const findfizbuzz=_=>{
    const range=Number(document.getElementById('fizbuzz_range').value);
   
    for(let i=1;i<=range;i++){
        
        const printfizbuzz=document.createElement('div')
        printfizbuzz.innerText=i
        if(i%3==0){
            printfizbuzz.innerText='fizz'
        }
        if(i%5==0){
            printfizbuzz.innerText="buzz"
        }
        if( i%3==0 && i%5==0 ){
            printfizbuzz.innerText='Fizz Buzz'
        }
        printfizbuzz.classList.add('series')
        let print=document.getElementById('fizbuzz_print')
        print.appendChild(printfizbuzz);
    }
}

document.getElementById('fizbuzz_btn').addEventListener('click',findfizbuzz)