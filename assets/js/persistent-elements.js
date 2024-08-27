const navbar = document.getElementById('navbar');
const navbarHtml =
`
    <div id="voyager-navbar-target">
    </div>
    <div class="desktop thin-desktop">
        <a class="navbar-logo" href="index.html">
            <img src="assets/images/branding/voyager-logo-1.png">
        </a>
        <!-- <img class="navbar-bg" src="assets/images/navbar/navbar.png"> -->
        <div class="navbar-bg">
            <img class="navbar-bg-left" src="assets/images/navbar/navbar-left.png">
            <img class="navbar-bg-right" src="assets/images/navbar/navbar-right.png">
        </div>
        <div class="notice-board">
            <span>NOTICE BOARD</span>
            <div class="list-wrapper">
                <ul>
                    <li>
                        Voyager launches on September 20th
                    </li>
                </ul>
            </div>
        </div>
        <div class="navbar-tab-container">
            <a class="navbar-tab glow-hover" href="about-us.html">About</a>
            <a class="navbar-tab glow-hover" href="#project-section">Services</a>
            <a class="navbar-tab glow-hover" href="#footer-section">Contact</a>
        </div>
    </div>
    <div class="mobile">
        <div class="off-screen-menu">
            <div class="off-screen-menu-content">
                <div class="navbar-tab-container">
                    <a class="navbar-tab glow-hover" href="about-us.html">About</a>
                    <a class="navbar-tab glow-hover" href="#project-section">Services</a>
                    <a class="navbar-tab glow-hover" href="#footer-section">Contact</a>
                </div>
                <img class="white-bar" src="assets/images/decor/white-line.png">
                <div class="details-container">
                    <div class="contact">
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <img src="assets/images/contact/contact-location.png">
                                <a class="glow-hover" href="https://maps.app.goo.gl/zeJmLpcKPMoWV8D17" target="_blank">58 Granby St, Leicester LE1 1DH</a>
                            </li>
                            <li>
                                <img src="assets/images/contact/contact-phone.png">
                                <a class="glow-hover" href="tel:000-000-0000">0000 000 0000</a>
                            </li>
                            <li>
                                <img src="assets/images/contact/contact-email.png">
                                <a class="glow-hover" href="mailto:email@address.com">email@address.com</a>
                            </li>
                        </ul>
                    </div>
                    <div class="opening-hours">
                        <h4>Opening Hours</h4>
                        <ul>
                            <li><span class="week">Mon</span>00:00 - 00:00</li>
                            <li><span class="week">Tue</span>00:00 - 00:00</li>
                            <li><span class="week">Wed</span>00:00 - 00:00</li>
                            <li><span class="week">Thu</span>00:00 - 00:00</li>
                            <li><span class="week">Fri</span>00:00 - 00:00</li>
                            <li><span class="week">Sat</span>00:00 - 00:00</li>
                            <li><span class="week">Sun</span>00:00 - 00:00</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div class="navbar-bg repeat-bar"></div>
        <a class="navbar-logo" href="index.html">
            <img src="assets/images/branding/voyager-logo-1.png">
        </a>
        <div class="ham-menu glow-hover">
            <img src="assets/images/navbar/mobile/hamburger-bar.png">
            <img src="assets/images/navbar/mobile/hamburger-bar.png">
            <img src="assets/images/navbar/mobile/hamburger-bar.png">
        </div>
        <!-- <div class="language-dropdown glow-hover">
            EN
            <img src="assets/images/navbar/mobile/dropdown-icon.png">
        </div> -->
    </div>
`;
// navbar.innerHTML = navbarHtml;

const footer = document.getElementById('footer-section');
const footerHtml =
`
<div id="footer-bg"></div>
<div id="footer-cta">
    <div id="booking">
        <img id="footer-logo" src="assets/images/branding/voyager-logo-2.png">
        <a class="btn book-now glow-hover">
            <img src="assets/images/btns/btn-3-contained.png">
            <span>BOOK NOW</span>
        </a>
    </div>
    <div>
        <h4>Quick Links</h4>
        <ul>
            <li><a class="glow-hover" href="#service-section">About</a></li>
            <li><a class="glow-hover" href="#project-section">Voycasts</a></li>
            <li><a class="glow-hover" href="#project-section">Interactive Development</a></li>
            <li><a class="glow-hover" href="#project-section">Custom Projects</a></li>
            <li><a class="glow-hover" href="#">Contact</a></li>
        </ul>
    </div>
    <div class="opening-hours">
        <h4>Opening Hours</h4>
        <ul>
            <li><span class="week">Mon</span>00:00 - 00:00</li>
            <li><span class="week">Tue</span>00:00 - 00:00</li>
            <li><span class="week">Wed</span>00:00 - 00:00</li>
            <li><span class="week">Thu</span>00:00 - 00:00</li>
            <li><span class="week">Fri</span>00:00 - 00:00</li>
            <li><span class="week">Sat</span>00:00 - 00:00</li>
            <li><span class="week">Sun</span>00:00 - 00:00</li>
        </ul>
    </div>
    <div class="contact">
        <h4>Contact</h4>
        <ul>
            <li>
                <img src="assets/images/contact/contact-location.png">
                <a class="glow-hover" href="https://maps.app.goo.gl/zeJmLpcKPMoWV8D17" target="_blank">58 Granby St, Leicester LE1 1DH</a>
            </li>
            <li>
                <img src="assets/images/contact/contact-phone.png">
                <a class="glow-hover" href="tel:000-000-0000">0000 000 0000</a>
            </li>
            <li>
                <img src="assets/images/contact/contact-email.png">
                <a class="glow-hover" href="mailto:email@address.com">email@address.com</a>
            </li>
        </ul>
    </div>
</div>
`
// footer.innerHTML = footerHtml;

const preloaderContainer = document.getElementById('preloader-container');
const preloaderHtml =
`
<div class="preloader">
    <div class="preloader__ring">
        <div class="preloader__sector">L</div>
        <div class="preloader__sector">o</div>
        <div class="preloader__sector">a</div>
        <div class="preloader__sector">d</div>
        <div class="preloader__sector">i</div>
        <div class="preloader__sector">n</div>
        <div class="preloader__sector">g</div>
        <div class="preloader__sector">.</div>
        <div class="preloader__sector">.</div>
        <div class="preloader__sector">.</div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
    </div>
    <div class="preloader__ring">
        <div class="preloader__sector">L</div>
        <div class="preloader__sector">o</div>
        <div class="preloader__sector">a</div>
        <div class="preloader__sector">d</div>
        <div class="preloader__sector">i</div>
        <div class="preloader__sector">n</div>
        <div class="preloader__sector">g</div>
        <div class="preloader__sector">.</div>
        <div class="preloader__sector">.</div>
        <div class="preloader__sector">.</div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
        <div class="preloader__sector"></div>
    </div>
</div>
`
// preloaderContainer.innerHTML = preloaderHtml;
