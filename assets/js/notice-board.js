import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const boardList = document.querySelector('.notice-board ul');
const storage = getStorage();
const noticeBoardDocRef = ref(storage, 'Notice Board.txt');
getDownloadURL(noticeBoardDocRef)
    .then((url) => {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            var blob = xhr.response;
            blob.text().then(text => {
                let listHTML = '';
                var items = text.split('\n');
                for (let i = 0; i < items.length; i++) {
                    listHTML += `<li>${items[i]}</li>`
                }
                boardList.innerHTML = listHTML;
            });
        };
        xhr.open('GET', url);
        xhr.send();
    })
    .catch((error) => {
        console.log(error);
    });
