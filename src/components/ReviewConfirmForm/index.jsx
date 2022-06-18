import { useCallback, useState, useEffect } from 'react';
import { FieldTitles, Buttons } from '../../styles/Common';
import ReviewConfirmForms from './Style';

function ReviewConfirmForm() {
    const client = { // 임시
        nickname: '닉네임',
        job: 'UX 디자이너',
        level: '미들(5-8)',
        link: 'https://www.coffeechat.kr/',
        message: '안녕하세요, 현재 디자인 에이전시에서 bx로 근무하고 있습니다. 네이버 프로덕트 디자인 직군으로 커리어 전환과 함께 이직을 고민하고 있습니다. 포트폴리오 제작과 방향성이 막막하여 요청드립니다.',
    };

    // 다른 일정 더보기
    const onClickScheduleMore = useCallback(() => {

    }, []);

    // 신청하기 버튼 활성화 여부
    const [canSubmit, setCanSubmit] = useState(false);
    useEffect(() => {
        setCanSubmit(true);
        
        return () => {
        }
    }, []);    

    return (
        <ReviewConfirmForms>
            <article className='form-client'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>신청자</h6>
                    </div>
                </FieldTitles>
                <div className='form-client-view'>
                    <p><b>{client.nickname}</b></p>
                    <p className='form-client-view-name'>{client.job} | {client.level} </p>
                </div>
            </article>
            <article className='form-link'>
                <FieldTitles>
                    <div className='title'>
                        <h6>포트폴리오</h6>
                    </div>
                    <div className='text'>
                        <p>신청자의 포트폴리오는 파트너만 확인할 수 있습니다. 외부 공유는 금지되어 있습니다.</p>
                    </div>                    
                </FieldTitles>
                <div className='form-link-button'>
                    <a href={client.link} target='_blank' rel="noreferrer">{client.nickname}님의 포트폴리오 확인하기</a>
                </div>
            </article>
            <article className='form-message'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>추가 궁금한 사항</h6>
                    </div>
                </FieldTitles>
                <div className='form-message-view'>
                    <p>{client.message}</p>
                </div>
            </article>
            <article className='form-schedule'>
                <FieldTitles>
                    <div className='title'>
                        <h6>일정 선택</h6>
                        <small>선호하는 일정 1개 선택</small>
                    </div>
                </FieldTitles>
                <div className='form-schedule-input'>
                    CheckShedule
                </div>
                <div className='form-schedule-more'> 
                    <button type='button' onClick={onClickScheduleMore}>다른 일정 더보기</button>
                </div>
            </article>
            <div className='form-submit'>
                <Buttons type='submit' disabled={!canSubmit}>일정 확정하기</Buttons>
                <a href='https://pf.kakao.com/_xjxcxbxfK/chat' target='_blank' rel='noreferrer'>도움이 필요해요</a>
            </div>
        </ReviewConfirmForms>
    );
}

export default ReviewConfirmForm;