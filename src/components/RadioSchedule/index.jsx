import PropTypes from 'prop-types';
import { LabelSchedules } from '../../styles/Common';
import InputRadio from '../InputRadio';

function RadioSchedule({ name, id, checkId, onClick, data }) {
    return (
        <div>
            <InputRadio name={name} id={id} checkId={checkId} onClick={onClick}>
                <LabelSchedules>
                    <p className='label-schedule-date'>{data.date}</p>
                    <p>{data.time}</p>
                </LabelSchedules>
            </InputRadio>
        </div>
    );
}

RadioSchedule.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checkId: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};

export default RadioSchedule;