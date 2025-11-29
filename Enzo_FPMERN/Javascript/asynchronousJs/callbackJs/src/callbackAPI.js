const getData = (url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            return cb(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

export { getData }