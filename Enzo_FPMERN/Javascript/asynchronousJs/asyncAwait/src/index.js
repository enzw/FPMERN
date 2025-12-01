const enzo = (kondisi) => {
    return new Promise((resolve, reject) => {
        if(kondisi){
            setTimeout(() => {
                resolve('Selamat menikah dengan ica');
            }, 2000);
        }else{
            setTimeout(() => {
                reject(new Error('Coba lagi'));
            }, 2000);
            
        };
    })
}

const btn = document.getElementById("btn");

btn.addEventListener('click', async () => {
    btn.innerHTML = "Loading...";
    const txt = document.getElementById("text");
    try{
        const data = await enzo(true);
        txt.innerHTML = data;
    }catch(err){
        txt.innerHTML = err.message;
    }finally{
        btn.innerHTML = "Masuk";
    }
})