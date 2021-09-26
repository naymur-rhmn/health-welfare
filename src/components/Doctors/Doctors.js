import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'
import DoctorList from '../DoctorList/DoctorList';



const Doctors = () => {
    // declare state
    const [doctors, setDoctors] = useState([]);
    const [doctorList, setDoctorList] = useState([]);
    // declare useeffect
    useEffect(() => {
        fetch('./doctors.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    // onclick event handler function
    const handleDoctor = doctor => {
        const addedDoctor = [...doctorList, doctor];
        setDoctorList(addedDoctor);
    }

    return (
        <div className="doctors-container">
            <div className="doctor-list">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                        handleDoctor={handleDoctor}>
                    </Doctor>)
                }
            </div>
            <div className="doctor-count">
                <DoctorList lists={doctorList}></DoctorList>
            </div>
        </div>
    );
};

export default Doctors;