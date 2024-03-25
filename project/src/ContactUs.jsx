
import './ContactUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsForm from './ContactUsForm';

function ContactUs() {
    return (  
        <div className="login-background">
        <h2 className="mt-3 text-justify titleForm ">Contact Us</h2>
            <ContactUsForm/>
        </div>
    );
}

export default ContactUs;