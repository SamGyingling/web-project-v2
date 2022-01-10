const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
        <div class="about">
            <h3>ABOUT US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, laudantium quidem dolore qui dolorum
                veniam ab quod, ipsa ex accusantium delectus nihil, natus similique accusamus? Dolore nam praesentium
                quod neque.</p>
            <div class="social-link">
                <a href="#"><i class="fab fa-facebook-square fa-lg"></i></a>
                <a href="#"><i class="fab fa-instagram-square fa-lg"></i></a>
                <a href="#"><i class="fab fa-pinterest-square fa-lg"></i></a>
                <a href="#"><i class="fab fa-youtube-square fa-lg"></i></a>
                <a href="#"><i class="fab fa-linkedin fa-lg"></i></a>
            </div>
        </div>
        <div class="info-link">
            <h3>MORE INFORMATION</h3>
            <ul>
                <li><a href="#">Terms & Conditions -coming soon</a></li>
                <li><a href="#">Product Care -coming soon</a></li>
                <li><a href="contact.html">Contact Us </a></li>
                <li><a href="#">Privacy Policy -coming soon</a></li>
                <li><a href="#">Shipping & Returns -coming soon</a></li>
            </ul>
        </div>
        <div class="newsletter">
            <h3>NEWSLETTER</h3>
            <p>Sign up for exclusive offers</p>
            <input type="email" name="email" placeholder="Please enter your email"><br>
            <a class="primary-button">Register</a>
        </div>`;
}
createFooter();