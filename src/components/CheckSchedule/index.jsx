import PropTypes from 'prop-types';
import InputCheck from '../InputCheck';
import CheckSchedules from './Style';

function CheckSchedule({ name, id, schedule }) {
    const onChange = (checked, changeId) => {
        console.log(checked, changeId);
    };

    return (
        <CheckSchedules>
            <InputCheck name={name} id={id} onChange={onChange}>
                <div className='label-schedule'>
                    <p>{schedule.date}</p>
                    <p><b>{schedule.time}</b></p>
                </div>
            </InputCheck>
        </CheckSchedules>
    )
}

CheckSchedule.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    schedule: PropTypes.object.isRequired,
};

export default CheckSchedule;