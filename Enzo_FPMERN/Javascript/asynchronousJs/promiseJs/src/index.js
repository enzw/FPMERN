const saskia = (kondisi) => {
    return new Promise(function(resolve, reject){
        if (kondisi) {
            setTimeout(() => {
                resolve("kamu berhasil masuk");
            }, 3000);
        } else {
            reject("Coba lagi");
        }
    });
}

const button = document.getElementById("btn");

button.addEventListener('click', function(){
    this.innerHTML = "Loading...";
    const text = document.getElementById("text");
    const data = saskia(true);

    data.then(res => {
        text.innerHTML = res;
    }).catch(err => {
        text.innerHTML = err;
    }).finally(() => {
        this.innerHTML = "Masuk";
    });
});
