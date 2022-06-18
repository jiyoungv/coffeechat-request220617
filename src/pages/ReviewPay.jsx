import { Inners, PageInfos, Divider } from '../styles/Common';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import ReviewPayForm from '../components/ReviewPayForm';
import img_rocket from '../assets/images/img_rocket.svg';

function ReviewPay() {
    const nickname = '파트너닉네임'; // 임시

    return (
        <PageLayout>
            <Header title={'결제하기'} />
            <Inners>
                <PageInfos>
                    <div className='info-with-image'>
                        <figure>
                            <img src={img_rocket} alt='' />
                        </figure>
                        <h2>{nickname} 파트너에게 신청한 포트폴리오 리뷰 커피챗 입니다.</h2>
                    </div>
                    <div className='info-desc'>
                        <p>제안한 일정 중 파트너가 선택하면 확정 스케줄을 개별적으로 안내 드립니다.</p>
                    </div>
                </PageInfos>
                <Divider/>
                <ReviewPayForm />
            </Inners>
        </PageLayout>
    );
}

export default ReviewPay;