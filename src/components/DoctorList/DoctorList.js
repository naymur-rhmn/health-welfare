import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './DoctorList.css'
const userIcon = <FontAwesomeIcon icon={faUser} />

const DoctorList = (props) => {
    // destructure props object
    const { lists } = props;

    // sorted duplicated object
    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }
    const sortedList = getUniqueListBy(lists, 'name');

    // calculate total
    let total = 0;
    for (const item of sortedList) {
        total = total + parseInt(item.sallary);
    }

    return (
        <div className="added-doctor-box">
            <div className="doctor-title">
                <h2 ><span>{userIcon}</span> Doctors Added: {sortedList.length}</h2>
                <h3>Total: ${total}</h3>
            </div>
            {
                sortedList.map(sorted => <h2 className="added-doctor" key={sorted._id}>{sorted.name}</h2>)
            }
        </div>
    );
};

export default DoctorList;