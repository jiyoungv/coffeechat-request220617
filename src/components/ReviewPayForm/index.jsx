import { useCallback } from 'react';
import { FieldTitles, Dividers, AmountLists, FloatButtons } from '../../styles/Common';
import ReviewPayForms from './Style';
import BottomSheet from '../BottomSheet';

function ReviewPayForm() {

    // 확인 및 결제하기
    const onSubmitPay = useCallback(() => {
        alert('확인 및 결제');
    }, []);

    return (
        <ReviewPayForms onSubmit={onSubmitPay}>
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
            <Dividers type2 />
            <article className='form-coupon'>
                <FieldTitles>
                    <div className='title'>
                        <h6>쿠폰</h6>
                        <p>적용안함</p>
                    </div>
                </FieldTitles>
                <div className='form-coupon-input'>
                    CheckCoupon
                </div>
            </article>            
            <Dividers type2 />
            <article className='form-amount'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>결제 금액</h6>
                    </div>
                </FieldTitles>
                <div className='form-amount-view'>
                    <AmountLists>
                        <li>
                            <p>1회 (40분)</p>
                            <p>55,000원</p>
                        </li>
                        {/* <li className='list-coupon'>
                            <p>[신규] 웰컴 1만원 할인 쿠폰 123123</p>
                            <p>-10,000원</p>
                        </li> */}
                        <li className='list-total'>
                            <p>총 결제 금액</p>
                            <p>55,000원</p>
                        </li>
                    </AmountLists>
                </div>
            </article>            
            <Dividers type2 />
            <article className='form-method'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>결제 수단</h6>
                    </div>
                </FieldTitles>
                <div className='form-method-input'>
                    CheckMethod
                </div>
            </article>            
            <Dividers type2 />
            <article className='form-caution'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>유의 사항</h6>
                    </div>
                </FieldTitles>
                <ul className='form-caution-list'>
                    <li>파트너 수락 후 일정 변경은 불가합니다.</li>
                    <li>파트너 수락 후 취소 시 환급이 불가합니다.</li>
                </ul>
            </article>
            <article className='form-policy'>
                <FieldTitles mb={16}>
                    <div className='title'>
                        <h6>노쇼 정책</h6>
                        <button type='button'>자세히 알아보기</button>
                    </div>
                </FieldTitles>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>환불 정책</h6>
                        <button type='button'>자세히 알아보기</button>
                    </div>
                </FieldTitles>
            </article>
            <Dividers />
            <article className='form-agree'>
                <p>
                    아래 버튼을 선택함으로써 <br/>
                    유의 사항, 환불정책 및 노쇼정책에 동의합니다.
                </p>
            </article>
            <FloatButtons type='submit' disabled={false}>확인 및 결제하기</FloatButtons>
            
            <BottomSheet title={'노쇼 정책'} text={'예약 시간으로부터 5분 후 입장 시 커피챗은 자동 취소되며 환불이 불가합니다.'} />
            <BottomSheet title={'환불정책'} text={'커피챗 예약시간에 파트너가 부득이한 사정으로 참석하지 못한 경우, 신청자님께 100% 환불됩니다.'} />
        </ReviewPayForms>
    );
}

export default ReviewPayForm;