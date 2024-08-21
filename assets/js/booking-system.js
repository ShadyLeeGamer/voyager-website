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
