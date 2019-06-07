class HttpService {

    get(url) {

        return new Promise((resolv, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);

            /* configuracoes */
            xhr.onreadystatechange = () => {

                if(xhr.readyState == 4) {

                    if(xhr.status == 200) {

                        resolv(JSON.parse(xhr.responseText));
                    } else {

                        reject(xhr.responseText);
                    }
                }
            };

            xhr.send();
        });
    }
}
