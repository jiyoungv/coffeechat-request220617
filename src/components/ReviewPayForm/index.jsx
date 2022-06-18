import { FieldTitles, Divider } from '../../styles/Common';
import ReviewPayForms from './Style';

function ReviewPayForm() {
    return (
        <ReviewPayForms>
            <article className='form-schedule'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>선택 일정</h6>
                    </div>
                    <div className='text'>
                        <small>제안한 시간 중 파트너가 확정하여 알림 드릴 예정입니다.</small>
                    </div>
                </FieldTitles>
                <div className='form-schedule-view'>
                    <ul>
                        <li>1/1 (월) 오전 00:00 ~ 00:00</li>
                        <li>1/2 (화) 오전 00:00 ~ 00:00</li>
                        <li>1/3 (수) 오전 00:00 ~ 00:00</li>
                    </ul>
                </div>
            </article>
            <article className='form-message'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>추가 궁금한 사항</h6>
                    </div>
                </FieldTitles>
                <div className='form-message-view'>
                    <p>안녕하세요, 현재 디자인 에이전시에서 bx로 근무하고 있습니다. 네이버 프로덕트 디자인 직군으로 커리어 전환과 함께 이직을 고민하고 있습니다. 포트폴리오 제작과 방향성이 막막하여 요청드립니다.</p>
                </div>
            </article>            
            <Divider type={'full'} />
            <article className='form-coupon'>
                <FieldTitles>
                    <div className='title'>
                        <h6>쿠폰</h6>
                        <p>적용안함</p>
                    </div>
                </FieldTitles>
                <div className='form-coupon-input'>
                    쿠폰
                </div>
            </article>            
            <Divider type={'full'} />
            <article className='form-money'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>결제 금액</h6>
                    </div>
                </FieldTitles>
                <div className='form-money-view'>
                    금액
                </div>
            </article>            
            <Divider type={'full'} />
            <article className='form-money'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>결제 수단</h6>
                    </div>
                </FieldTitles>
                <div className='form-money-input'>
                    카드 페이
                </div>
            </article>            
            <Divider type={'full'} />                        
        </ReviewPayForms>
    );
}

export default ReviewPayForm;