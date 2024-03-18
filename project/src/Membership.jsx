
import MembershipForm from "./MembershipForm";
import './MembershipForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Membership() {
    return (  
        <div className="login-background">
        <h2 className="mt-3 text-justify titleForm ">Music Membership Registration</h2>
            <MembershipForm/>
        </div>
    );
}

export default Membership;