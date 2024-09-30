const bookingForm = document.getElementById('booking-form');

function init() {
    const openFormBtns = document.querySelectorAll('.book-now');
    openFormBtns.forEach(btn => {
        window.addManagedEventListener(btn, 'click', openBookingForm);
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
}

const closeBtn = bookingForm.querySelector('.close-btn');
closeBtn.addEventListener('click', closeBookingForm);

const directBtns = bookingForm.querySelectorAll('a.btn');
directBtns.forEach((btn) => {
    btn.addEventListener('click', closeBookingForm);
});

function openBookingForm() {
    if (!bookingForm.classList.contains('open')) {
        bookingForm.classList.add('open');
    }
}

function closeBookingForm() {
    if (bookingForm.classList.contains('open')) {
        bookingForm.classList.remove('open');
    }
}

export default { init };