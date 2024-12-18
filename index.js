
const firstdiv=document.querySelector('#boxe1');
console.log(firstdiv);
const Secondiv=document.querySelector('#boxe2');
console.log(Secondiv);
const items=document.getElementsByClassName('iterm');
// const items =document.querySelector('.iterm');
console.log(items);

for (let item of items) {
    item.addEventListener('dragstart', (e) => {
        let data = e.target;
        console.log(data);
        Secondiv.addEventListener('dragover', (e)=>{
            e.preventDefault();
            e.stopPropagation
            
        })
        Secondiv.addEventListener('drop', ()=>{
            Secondiv.append(data);
            data="";
        })
        // console.log(data);
         
      firstdiv.addEventListener('dragover', (e)=>{
        // console.log(e);
        e.preventDefault();
        e.stopPropagation

      })
      firstdiv.addEventListener('drop', ()=>{
        firstdiv.append(data);
        data="";
      })

})
    }

