import { useEffect, useState, useCallback } from 'react';
import { FieldTitles, Dividers, Cautions, FloatButtons, InputTexts, InputTextAreas } from '../../styles/Common';
import ReviewRequestForms from './Style';
import CheckSchedule from '../CheckSchedule';
import dateData from '../../data/dateData';

function ReviewRequestForm() {
    // 일정 선택
    // const [schedule, setSchedule] = useState([]);

    // 다른 일정 더보기
    const onClickScheduleMore = useCallback(() => {

    }, []);

    // 포트폴리오 링크
    const [link, setLink] = useState('');
    const onChangeLink = useCallback((e) => {
        setLink(e.target.value);
    }, []);

    // 추가 궁금한 사항
    const [message, setMessage] = useState('');
    const onChangeMessage = useCallback((e) => {
        setMessage(e.target.value);
    }, []);    

    // 신청하기
    const onSubmitRequest = useCallback((e) => {
        e.preventDefault();
        alert(`
            일정: none
            포트폴리오 링크: ${link}
            추가 궁금한 사항: ${message}
        `);
    }, [link, message]);

    // 신청하기 버튼 활성화 여부
    const [canSubmit, setCanSubmit] = useState(false);
    useEffect(() => {
        if (link.length < 1) return;
        if (message.length < 50) return;
        setCanSubmit(true);

        return () => {
            setCanSubmit(false);
        }
    }, [link, message]);

    return (
        <ReviewRequestForms onSubmit={onSubmitRequest}>
            <article className='form-schedule'>
                <FieldTitles>
                    <div className='title'>
                        <h6>일정 선택</h6>
                        <small>선호하는 일정 모두 선택 가능</small>
                    </div>
                </FieldTitles>
                <div className='form-schedule-input'>
                    {dateData.map((v, i) => (
                        <CheckSchedule key={v.id} id={`review-request-schedule${i}`} name={'review-request-schedule'} content={v.content} />
                    ))}
                </div>
                <div className='form-schedule-more'> 
                    <button type='button' onClick={onClickScheduleMore}>다른 일정 더보기</button>
                </div>
            </article>
            <Dividers/>
            <article className='form-link'>
                <FieldTitles>
                    <div className='title'>
                        <h6>나의 포트폴리오</h6>
                        <small>필수</small>
                    </div>
                    <div className='text'>
                        <p>제출해주신 포트폴리오는 파트너에게만 전달되며 철저히 보호됩니다.</p>
                    </div>
                </FieldTitles>
                <div className='form-link-input'>
                    <InputTexts type='text' value={link} onChange={onChangeLink} placeholder={'포트폴리오 링크를 추가해 주세요.'} />
                </div>
                <Cautions>
                    <p>PDF 형태의 포트폴리오 제출을 추가로 원하는 경우, 커피챗 카카오톡 고객센터로 문의 주시길 바랍니다.</p>
                </Cautions>
            </article>
            <Dividers/>
            <article className='form-message'>
                <FieldTitles>
                    <div className='title'>
                        <h6>추가 궁금한 사항</h6>
                        <small>필수 (최대 500자)</small>
                    </div>
                </FieldTitles>
                <div className='form-message-input'>
                    <InputTextAreas value={message} onChange={onChangeMessage} maxLength='500' placeholder={'가장 궁금한 내용을 포함하여 파트너에게 미리 전하고 싶은 메시지를 자유롭게 작성해 보세요. (최소 50자)'}></InputTextAreas>
                </div>
            </article>
            <FloatButtons type='submit' disabled={!canSubmit}>신청하기</FloatButtons>
        </ReviewRequestForms>
    );
}

export default ReviewRequestForm;