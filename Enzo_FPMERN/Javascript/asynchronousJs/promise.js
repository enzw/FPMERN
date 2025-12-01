// contoh sederhana penerapan promise
// promise tuh fungsi bawaan js
const sigma = new Promise(function (resolve, reject) {
    if (true) {
        console.log('resolved');
        resolve('aw');
    } else {
        console.log('rejected');
        reject('saskia burik');
    };
});

// result  disini akan otomatis terisi nilai dari "sigma" alias terisi dari hasil promise
sigma.then(function(result){
    console.log(result);
});