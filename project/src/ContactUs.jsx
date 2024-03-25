
import './ContactUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsForm from './ContactUsForm';
import Footer1 from './Footer';

function ContactUs() {
    return (  
        <div className="login-background">
        <h2 className="mt-3 text-justify titleForm ">Contact Us</h2>
            <ContactUsForm/>
            <footer>
                <Footer1/>
            </footer>
        </div>
        
            
    );
}

export default ContactUs;