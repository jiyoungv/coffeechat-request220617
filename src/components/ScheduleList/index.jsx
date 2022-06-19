import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import CheckSchedule from '../CheckSchedule';
import RadioSchedule from '../RadioSchedule';
import ScheduleLists from './Style';

// 다수 선택 set
// const [checkSchedule, onChangeSchedule] = useInputCheck();
// <ScheduleList name={'schedule'} handler={onChangeSchedule} data={scheduleData} />

// 1개만 선택 set
// const [checkSchedule, onClickSchedule] = useInputRadio('', true); // 2번째 인자 true면 셀프 체크 해제 가능
// <ScheduleList name={'schedule'} handler={onClickSchedule} data={scheduleData} multiple={false} checkId={checkSchedule} />

function ScheduleList({ name, handler, data, firstLength = 4, multiple = true, checkId = ''}) {
    // 다른 일정 더보기
    const shouldScheduleHide = data.length > firstLength;
    const [scheduleLength, setScheduleLength] = useState(shouldScheduleHide ? firstLength : data.length);
    const [canScheduleMore, setCanScheduleMore] = useState(shouldScheduleHide ? true : false );
    const onClickScheduleMore = useCallback(() => {
        setScheduleLength(data.length);
        setCanScheduleMore(false);
    }, [data.length]);

    return (
        <ScheduleLists>
            <div className='form-schedule-input'>
                {data.map((v, i) => {
                    if (i > scheduleLength - 1) return false;
                    if (multiple) return <CheckSchedule key={v.id} name={name} id={v.id} onChange={handler} data={v.schedule} />
                    else return <RadioSchedule key={v.id} name={name} id={v.id} checkId={checkId} onClick={handler} data={v.schedule} />
                })}
            </div>
            {canScheduleMore &&
                <div className='form-schedule-more'> 
                    <button type='button' onClick={onClickScheduleMore}>다른 일정 더보기</button>
                </div>
            }
        </ScheduleLists>
    );
}

ScheduleList.propTypes = {
    name: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    firstLength: PropTypes.number,
    multiple: PropTypes.bool,
    checkId: PropTypes.string,
};

export default ScheduleList;