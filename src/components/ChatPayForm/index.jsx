import { useCallback, useEffect, useRef, useState } from 'react';
import { FieldTitles, Dividers, AmountLists, Buttons, InputTextAreas } from '../../styles/Common';
import ChatPayForms from './Style';
import BottomSheet from '../BottomSheet';
import RadioCoupon from '../RadioCoupon';
import InputRadio from '../InputRadio';
import useInputRadio from '../../hooks/useInputRadio';
import couponData from '../../tempData/couponData';
import payMethodData from '../../tempData/payMethodData';
import partnerData from '../../tempData/partnerData';
import { priceToString } from '../../utils/func';
// import useInputText from '../../hooks/useInputText';

function ChatPayForm() {
    // 사전 질문
    const questionRef = useRef();
    const [question, setQuestion] = useState(partnerData.question);
    const [questionHeight, setQuestionHeight] = useState();
    const onChangeQuestion = useCallback((e) => {
        setQuestion(e.target.value);
        setQuestionHeight();
        setQuestionHeight(questionRef.current.scrollHeight);
    }, []);

    // 사전 질문 활성화
    const [disabledQuestion, setDisabledQuestion] = useState(true);
    const onClickQuestion = useCallback(() => {
        setDisabledQuestion(false); 
    }, []);
    useEffect(() => {
        if (!disabledQuestion) {
            questionRef.current.focus();
        }
    }, [disabledQuestion]);

    // // 사전 질문 높이 자동 맞춤
    
    // useEffect(() => {
    //     if (question.length) {console.log('111')
    //         setQuestionHeight(questionRef.current.scrollHeight);
    //     }
    // }, [question]);

    // 수정한 사전 질문 저장
    const [saveQuestion, setSaveQuestion] = useState(partnerData.question);

    // 사전 질문 수정 취소
    const onCancleQuestion = useCallback(() => {
        // setQuestionHeight();
        setQuestion(saveQuestion);
        setDisabledQuestion(true);
    }, [saveQuestion, setQuestion]);

    // 사전 질문 수정 완료
    const onCompleteQuestion = useCallback(() => {
        setDisabledQuestion(true);
        setSaveQuestion(question);
    }, [question]);

    // 쿠폰
    const [checkCoupon, onClickCoupon] = useInputRadio('', true);

    // 선택된 쿠폰 정보
    const [checkCouponInfo, setCheckCouponInfo] = useState(null);
    useEffect(() => {
        let couponInfo = null;

        if (checkCoupon.length > 0) {
            for (let x of couponData) {
                if (checkCoupon === x.id) {
                    couponInfo = {
                        name: x.coupon.name,
                        amount: x.coupon.amount,
                    };
                }
            }
        }

        setCheckCouponInfo(couponInfo)
    }, [checkCoupon]);

    // 결제 금액
    const [onceAmount] = useState(55000);
    const [totalAmount, setTotalAmount] = useState(onceAmount);
    useEffect(() => {
        if (checkCouponInfo) {
            setTotalAmount(onceAmount - checkCouponInfo.amount);
        }

        return () => {
            setTotalAmount(onceAmount)
        }
    }, [onceAmount, checkCouponInfo]);

    // 결제 수단
    const [checkMethod, onClickMethod] = useInputRadio('credit');

    // 노쇼 정책 바텀시트
    const [openPolicyNoShow, setOpenPolicyNoShow] = useState(false);
    const onOpenPolicyNoShow = useCallback(() => {
        setOpenPolicyNoShow(true);
    }, []);
    const onClosePolicyNoShow = useCallback(() => {
        setOpenPolicyNoShow(false);
    }, []);

    // 환불 정책 바텀시트
    const [openPolicyRefund, setOpenPolicyRefund] = useState(false);
    const onOpenPolicyRefund = useCallback(() => {
        setOpenPolicyRefund(true);
    }, []);
    const onClosePolicyRefund = useCallback(() => {
        setOpenPolicyRefund(false);
    }, []);

    // 확인 및 결제하기
    const onSubmitPay = useCallback((e) => {
        e.preventDefault();
        console.log(`선택 쿠폰 ID: ${checkCoupon}\n선택한 결제 수단 ID: ${checkMethod}\n총 결제 금액: ${totalAmount}`);
    }, [checkCoupon, checkMethod, totalAmount]);

    return (
        <ChatPayForms onSubmit={onSubmitPay}>
            <article className='form-partner'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>파트너 정보</h6>
                    </div>
                </FieldTitles>
                <div className='form-partner-view'>
                    <p>airbnb 에어비앤비 코리아 Trust &amp; Safety, 루루 파트너 입니다. </p>
                </div>
            </article>
            <article className='form-schedule'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>선택 일정</h6>
                    </div>
                    <div className='text'>
                        <small>
                            선택 일정은 확정이 아닙니다. <br/>
                            파트너가 가능한 시간과 매칭하여 알림 드릴 예정입니다.                            
                        </small>
                    </div>
                </FieldTitles>
                <div className='form-schedule-view'>
                    <ul>
                        {partnerData.schedule.map((v, i) => (<li key={i}>{v}</li>))}
                    </ul>
                </div>
            </article>
            <article className='form-question'>
                <FieldTitles mb={8} className='field-title'>
                    <div className='title'>
                        <h6>내가 작성한 사전 질문</h6>
                        {disabledQuestion && <button type='button' onClick={onClickQuestion}><b>수정하기</b></button>}
                    </div>
                </FieldTitles>
                <div className='form-question-input'>
                    <InputTextAreas value={question} ref={questionRef} autoHeight={questionHeight} onChange={onChangeQuestion} rows='3' maxLength='500' disabled={disabledQuestion}></InputTextAreas>
                    {!disabledQuestion &&
                        <div className='button'>
                            <button type='button' onClick={onCancleQuestion}>취소</button>
                            <button type='button' onClick={onCompleteQuestion}>완료</button>
                        </div>
                    }
                </div>
            </article>
            <Dividers type2 />
            <article className='form-coupon'>
                <FieldTitles mb={0}>
                    <div className='title'>
                        <h6>쿠폰</h6>
                        <h6>적용가능한 쿠폰이 없습니다</h6>
                    </div>
                </FieldTitles>
            </article>
            <Dividers type2 />            
            <article className='form-coupon'>
                <FieldTitles>
                    <div className='title'>
                        <h6>쿠폰</h6>
                        {checkCoupon.length === 0 && <p>적용안함</p>}
                    </div>
                </FieldTitles>
                <div className='form-coupon-input'>
                    {couponData.map((v, i) => (<RadioCoupon key={v.id} name={'coupon'} id={v.id} checkId={checkCoupon} onClick={onClickCoupon} data={v.coupon}/>))}
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
                            <p>{priceToString(onceAmount)}원</p>
                        </li>
                        {checkCouponInfo &&
                            <li className='list-coupon'>
                                <p>{checkCouponInfo.name}</p>
                                <p>-{priceToString(checkCouponInfo.amount)}원</p>
                            </li>
                        }
                        <li className='list-total'>
                            <p>총 결제 금액</p>
                            <p>{priceToString(totalAmount)}원</p>
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
                    {payMethodData.map((v, i) => (<InputRadio key={v.id} name={'method'} id={v.id} checkId={checkMethod} onClick={onClickMethod} label={v.name}/>))}
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
                        <button type='button' onClick={onOpenPolicyNoShow}>자세히 알아보기</button>
                        <BottomSheet close={!openPolicyNoShow} onClose={onClosePolicyNoShow} title={'노쇼 정책'} text={'예약 시간으로부터 5분 후 입장 시 커피챗은 자동 취소되며 환불이 불가합니다.'} />
                    </div>
                </FieldTitles>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>환불 정책</h6>
                        <button type='button' onClick={onOpenPolicyRefund}>자세히 알아보기</button>
                        <BottomSheet close={!openPolicyRefund} onClose={onClosePolicyRefund} title={'환불정책'} text={'커피챗 예약시간에 파트너가 부득이한 사정으로 참석하지 못한 경우, 신청자님께 100% 환불됩니다.'} />
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
            <div className='form-submit'>
                <Buttons type='submit'>확인 및 결제하기</Buttons>
            </div>
        </ChatPayForms>
    );
}

export default ChatPayForm;