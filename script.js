function myFunction(){
    const btn = document.querySelector('#btn')
    const drop = document.querySelector('.dropdown')

    btn.addEventListener('click', () => {
        if (drop.style.display == 'block'){
            drop.style.display = "none";
        }else{
            drop.style.display = "block";
        }
        
    });
}