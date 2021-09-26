import './Doctor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd } from '@fortawesome/free-solid-svg-icons'
// icon
const doctorIcon = <FontAwesomeIcon icon={faUserMd} />

const Doctor = (props) => {
    const { doctor } = props;
    // destructure object
    const { name, age, country, experience, expert, sallary, picture } = props.doctor;
    return (
        <div className="single-doctor">
            <img className="doctor-img" src={picture} alt="" />
            <div>
                <p>Name: <span>{name}</span></p>
                <p>Age: <span>{age}</span></p>
                <p>Expert: <span>{expert}</span></p>
                <p>Experience: <span>{experience}</span> Years</p>
                <p>Country: <span>{country}</span></p>
                <p>Sallary: <span>${sallary}</span></p>
                <button onClick={() => props.handleDoctor(doctor)} className="doctor-btn">{doctorIcon} add to list</button>
            </div>
            <div className="social-icon">
                <span><a href="#"><i className="fab fa-facebook-square"></i></a></span>
                <span><a href="#"><i className="fab fa-twitter-square"></i></a></span>
            </div>
        </div>
    );
};

export default Doctor;