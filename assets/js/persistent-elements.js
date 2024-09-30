const beforeMain = document.getElementById('before-main');

/* <form id="booking-form" class="popup">
<div class="content-container">
    <div class="form-wrapper">
        <div class="close-btn glow-hover"></div>

        <img data-src="assets/images/branding/voyager-logo-3.webp">

        <div class="side-decor-heading">
            <span></span>
            <h2>Aboard The List</h2>
            <span></span>
        </div>

        <div class="input-field">
            <input id="name" type="text" required="required">
            <span>Name</span>
        </div>
        <div class="input-field">
            <input id="email" type="email" required="required">
            <span>Email</span>
        </div>
        <div class="input-field">
            <input id="phone-number" type="number" required="required">
            <span>Phone Number</span>
        </div>

        <a class="btn submit glow-hover" href="#">
            <img data-src="assets/images/btns/btn-3-contained.webp">
            <span>Book Now</span>
        </a>
    </div>
</div>
</form> */

const beforeMainHtml =
`
<div id="preloader-container" class="transition-fade initial-loading">
    <img src="assets/gifs/loading.gif">
</div>

<div id="cursor-glow-wrapper" class="thin-desktop desktop">
    <div id="cursor-glow" class="thin-desktop desktop"></div>
</div>

<form id="booking-form" class="popup">
    <div class="content-container">
        <div class="form-wrapper">
            <div class="close-btn glow-hover"></div>

            <img class="logo" data-src="assets/images/branding/voyager-logo-3.webp">

            <div class="side-decor-heading">
                <span></span>
                <h2>Contact Us To Book</h2>
                <span></span>
            </div>

            <div class="double-column">
                <div>
                    <img class="screenshot" data-src="assets/images/shared/virtual-productions.jpg">
                    <a class="btn submit glow-hover" href="green-screen-production.html">
                        <img data-src="assets/images/btns/btn-3-contained.webp">
                        <span>Productions</span>
                    </a>
                </div>
                <div class="contact">
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            <img data-src="assets/images/contact/contact-location.webp">
                            <a class="glow-hover" href="https://maps.app.goo.gl/zeJmLpcKPMoWV8D17" target="_blank">58a Granby Street, Leicester LE1 1DH</a>
                        </li>
                        <li>
                            <img data-src="assets/images/contact/contact-phone.webp">
                            <a class="glow-hover" href="tel:747-036-1585">(+44) 747 036 1585</a>
                        </li>
                        <li>
                            <img data-src="assets/images/contact/contact-email.webp">
                            <a class="glow-hover" href="mailto:connect@voyagervrlab.co.uk">connect@voyagervrlab.co.uk</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</form>

<div id="navbar">
    <div id="voyager-navbar-target">
    </div>
    <div class="desktop thin-desktop">
        <a class="navbar-logo" href="index.html">
            <img src="assets/images/branding/voyager-logo-1.webp">
        </a>
        <!-- <img class="navbar-bg" src="assets/images/navbar/navbar.webp"> -->
        <div class="navbar-bg">
            <img class="navbar-bg-left" src="assets/images/navbar/navbar-left.webp">
            <img class="navbar-bg-right" src="assets/images/navbar/navbar-right.webp">
        </div>
        <div class="notice-board">
            <span>NOTICE BOARD</span>
            <div class="list-wrapper">
                <ul>
                </ul>
            </div>
        </div>
        <div class="navbar-tab-container">
            <a class="glow-hover" href="about-us.html">About</a>
            <a class="glow-hover" href="index.html#service-section">Services</a>
            <div class="dropdown">
                <button class="dropbtn main"><a href="green-screen-production.html">Productions</a></button>
                <div class="dropdown-content">
                    <a class="glow-hover book-now" href="">Book Now!</a>
                </div>
                <img src="assets/images/dropdown/icon.webp">
            </div>
            <a class="glow-hover" href="index.html#slideshow-section">Gallery</a>
            <a class="glow-hover" href="#footer">Contact</a>
        </div>
    </div>
    <div class="mobile">
        <div class="off-screen-menu">
            <div class="off-screen-menu-content">
                <div class="navbar-tab-container">
                    <a class="glow-hover" href="about-us.html">About</a>
                    <a class="glow-hover" href="index.html#service-section">Services</a>
                    <a class="glow-hover main" href="green-screen-production.html">Productions</a>
                    <a class="glow-hover" href="index.html#slideshow-section">Gallery</a>
                    <a class="glow-hover" href="#footer">Contact</a>
                </div>
                <img class="white-bar" data-src="assets/images/decor/white-line.webp">
                <div class="details-container">
                    <div class="column">
                        <div class="contact">
                            <h4>Contact</h4>
                            <ul>
                                <li>
                                    <img data-src="assets/images/contact/contact-location.webp">
                                    <a class="glow-hover" href="https://maps.app.goo.gl/zeJmLpcKPMoWV8D17" target="_blank">58a Granby Street, Leicester LE1 1DH</a>
                                </li>
                                <li>
                                    <img data-src="assets/images/contact/contact-phone.webp">
                                    <a class="glow-hover" href="tel:777-296-0308">(+44) 777 296 0308</a>
                                </li>
                                <li>
                                    <img data-src="assets/images/contact/contact-email.webp">
                                    <a class="glow-hover" href="mailto:connect@voyagervrlab.co.uk">connect@voyagervrlab.co.uk</a>
                                </li>
                            </ul>
                        </div>
                        <div class="social">
                            <ul>
                                <li><a href="https://www.linkedin.com/company/voyager-vr-lab" target="_blank"><img data-src="assets/images/social-media/linkedin-colour.webp"></a></li>
                                <li><a href="https://www.tiktok.com/@voyager.vr" target="_blank"><img data-src="assets/images/social-media/tiktok-colour.webp"></a></li>
                                <li><a href="https://www.instagram.com/voyager_vr_lab_uk" target="_blank"><img data-src="assets/images/social-media/instagram-colour.webp"></a></li>
                                <li><a href="https://www.facebook.com/people/Voyager-VR/61563781002032" target="_blank"><img data-src="assets/images/social-media/facebook-colour.webp"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="opening-hours">
                        <h4>Opening Hours</h4>
                        <ul>
                            <li><span class="week">Mon</span> 8:30 AM – 5:30 PM</li>
                            <li><span class="week">Tue</span> 8:30 AM – 5:30 PM</li>
                            <li><span class="week">Wed</span> 8:30 AM – 5:30 PM</li>
                            <li><span class="week">Thu</span> 8:30 AM – 5:30 PM</li>
                            <li><span class="week">Fri</span> 8:30 AM – 5:30 PM</li>
                            <li><span class="week">Sat</span>10:00 AM – 4:00 PM</li>
                            <li><span class="week">Sun</span>10:00 AM – 4:00 PM</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div class="navbar-bg repeat-bar"></div>
        <a class="navbar-logo" href="index.html">
            <img src="assets/images/branding/voyager-logo-1.webp">
        </a>
        <div class="ham-menu glow-hover">
            <img data-src="assets/images/navbar/mobile/hamburger-bar.webp">
            <img data-src="assets/images/navbar/mobile/hamburger-bar.webp">
            <img data-src="assets/images/navbar/mobile/hamburger-bar.webp">
        </div>
        <!-- <div class="language-dropdown glow-hover">
            EN
            <img data-src="assets/images/navbar/mobile/dropdown-icon.webp">
        </div> -->
    </div>
</div>

<div class="thin-desktop desktop">
    <div class="side-text-left"></div>
    <div class="side-text-right"></div>            
</div>
`;
beforeMain.innerHTML = beforeMainHtml;

const afterMain = document.getElementById('after-main');
const afterMainHtml =
`
<div id="footer" class="section">
    <div id="footer-bg"></div>
    <div id="footer-cta">
        <div id="booking">
            <img id="footer-logo" data-src="assets/images/branding/voyager-logo-2.webp">
            <a class="btn book-now glow-hover">
                <img data-src="assets/images/btns/btn-3-contained.webp">
                <span>Book Your Slot</span>
            </a>
        </div>
        <div>
            <h4>Quick Links</h4>
            <ul>
                <li><a class="glow-hover" href="about-us.html">About</a></li>
                <li><a class="glow-hover" href="index.html#project-section">Productions</a></li>
                <li><a class="glow-hover" href="index.html#project-section">Virtual Reality</a></li>
                <li><a class="glow-hover" href="index.html#project-section">Augmented Reality</a></li>
                <li><a class="glow-hover" href="index.html#project-section">Web Development</a></li>
            </ul>
        </div>
        <div class="opening-hours">
            <h4>Opening Hours</h4>
            <ul>
                <li><span class="week">Mon</span> 8:00 AM – 6:00 PM</li>
                <li><span class="week">Tue</span> 8:00 AM – 6:00 PM</li>
                <li><span class="week">Wed</span> 8:00 AM – 6:00 PM</li>
                <li><span class="week">Thu</span> 8:00 AM – 6:00 PM</li>
                <li><span class="week">Fri</span> 8:00 AM – 6:00 PM</li>
                <li><span class="week">Sat</span> 6:00 PM – 10:00 PM</li>
                <li><span class="week">Sun</span> 6:00 PM – 10:00 PM</li>
            </ul>
        </div>
        <div class="column">
            <div class="contact">
                <h4>Contact</h4>
                <ul>
                    <li>
                        <img data-src="assets/images/contact/contact-location.webp">
                        <a class="glow-hover" href="https://maps.app.goo.gl/zeJmLpcKPMoWV8D17" target="_blank">58a Granby Street, Leicester LE1 1DH</a>
                    </li>
                    <li>
                        <img data-src="assets/images/contact/contact-phone.webp">
                        <a class="glow-hover" href="tel:747-036-1585">(+44) 747 036 1585</a>
                    </li>
                    <li>
                        <img data-src="assets/images/contact/contact-email.webp">
                        <a class="glow-hover" href="mailto:connect@voyagervrlab.co.uk">connect@voyagervrlab.co.uk</a>
                    </li>
                </ul>
            </div>
            <div class="social">
                <ul>
                    <li><a href="https://www.linkedin.com/company/voyager-vr-lab" target="_blank"><img data-src="assets/images/social-media/linkedin-colour.webp"></a></li>
                    <li><a href="https://www.tiktok.com/@voyager.vr" target="_blank"><img data-src="assets/images/social-media/tiktok-colour.webp"></a></li>
                    <li><a href="https://www.instagram.com/voyager_vr_lab_uk" target="_blank"><img data-src="assets/images/social-media/instagram-colour.webp"></a></li>
                    <li><a href="https://www.facebook.com/people/Voyager-VR/61563781002032" target="_blank"><img data-src="assets/images/social-media/facebook-colour.webp"></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
`
afterMain.innerHTML = afterMainHtml;