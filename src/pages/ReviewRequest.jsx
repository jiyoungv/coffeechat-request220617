import { Inners, Titles } from '../styles/Common';
import PageLayout from '../components/PageLayout';
import ReviewRequestForm from '../components/ReviewRequestForm';

function ReviewRequest() {
    const nickname = '파트너닉네임'; // 임시

    return (
        <PageLayout>
            <Inners>
                <Titles>
                    <h1>{nickname} 파트너에게 포트폴리오 리뷰 커피챗 신청하기</h1>
                </Titles>
                <ReviewRequestForm />
            </Inners>
        </PageLayout>
    );
}

export default ReviewRequest;