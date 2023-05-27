import React from 'react';

const Contact = () => {
    return (
        <section class="page-section" id="contact">
        <div class="container">
            {/* <!-- Contact Section Heading--> */}
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            {/* <!-- Icon Divider--> */}
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div> 
            <div class="contact-info">
                <p id="blank"></p><p>651-200-9644</p><p>dkalla@marlboro.edu</p><p></p>
            </div>
            <div id="link-icons">
                <div></div>
                <div class="link-icons">
                    <a href="https://github.com/dtkalla" target="_blank">
                        <img className="icons-header" alt="Github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                    </a>
                    <br/>
                    <a href="https://linkedin.com/in/daniel-kalla" target="_blank">
                        <img className="icons-header" alt="LinkedIn" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/>
                    </a>
                    <br/>
                    <a href="https://wellfound.com/u/daniel-thomas-kalla" target="_blank">
                        <img class="icons-header" id='angel-list' src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/angellist-512.png"/>
                    </a>
                </div>
                <div></div>
            </div>
        </div>
    </section>
    );
}

export default Contact;
