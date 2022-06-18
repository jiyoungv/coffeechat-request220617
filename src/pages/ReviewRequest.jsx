import { Inners, PageTitles } from '../styles/Common';
import PageLayout from '../components/PageLayout';
import ReviewRequestForm from '../components/ReviewRequestForm';
import Header from '../components/Header';

function ReviewRequest() {
    const nickname = '파트너닉네임'; // 임시

    return (
        <PageLayout>
            <Header />
            <Inners>
                <PageTitles>
                    <h1>{nickname} 파트너에게 포트폴리오 리뷰 커피챗 신청하기</h1>
                </PageTitles>
                <ReviewRequestForm />
            </Inners>
        </PageLayout>
    );
}

export default ReviewRequest;