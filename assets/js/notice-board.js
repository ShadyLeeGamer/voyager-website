const storage = firebase.storage();
const pathRef = storage.ref('Notice Board.txt');
// const noticeBoardDocRef = storageRef.child('Notice Boardd.txt');
pathRef.getDownloadURL()
    .then((url) => {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            var blob = xhr.response;
            console.log(blob);
        };
        xhr.open('GET', url);
        xhr.send();
    })
    .catch((error) => {
        console.log(error);
    });
