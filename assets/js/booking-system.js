// #region DB Connection
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { collection, addDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const firebaseConfig = {
apiKey: "AIzaSyAZIMfU0QNw9th2b57n2J4rl3stwE_ZZYk",
authDomain: "voyager-56139.firebaseapp.com",
projectId: "voyager-56139",
storageBucket: "voyager-56139.appspot.com",
messagingSenderId: "327151315718",
appId: "1:327151315718:web:60e05e82f166e608890c87",
measurementId: "G-2W3TZYHJQ1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
// #endregion

const bookingForm = document.getElementById('booking-form');
const openFormBtns = document.querySelectorAll('.book-now');
openFormBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!bookingForm.classList.contains('open')) {
            bookingForm.classList.add('open');
        }
    });
});

// bookingForm
//     .querySelector('.submit')
//     .addEventListener('click', async (event) => {
//         // TODO: Check if inputs are valid

//         try {
//             event.preventDefault();

//             const name = bookingForm.querySelector('#name').value;
//             const email = bookingForm.querySelector('#email').value;
//             const phoneNumber = bookingForm.querySelector('#phone-number').value;

//             const docRef = await addDoc(collection(db, 'subscribers'), {
//                 email: email
//             });

//             console.log("Document written with ID: ", docRef.id);
//         }
//         catch (error) {
//             console.log(error);
//         }
//     });

bookingForm
    .querySelector('.close-btn')
    .addEventListener('click', () => {
        if (bookingForm.classList.contains('open')) {
            bookingForm.classList.remove('open');
        }
    });
