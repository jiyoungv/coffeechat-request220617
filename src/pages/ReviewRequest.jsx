import { PageTitles } from '../styles/Common';
import PageLayout from '../components/PageLayout';
import ReviewRequestForm from '../components/ReviewRequestForm';
import PageHeader from '../components/PageHeader';

function ReviewRequest() {
    const nickname = '파트너닉네임'; // 임시

    return (
        <PageLayout>
            <PageHeader />
            <PageTitles>
                <h1>{nickname} 파트너에게 포트폴리오 리뷰 커피챗 신청하기</h1>
            </PageTitles>
            <ReviewRequestForm />
        </PageLayout>
    );
}

export default ReviewRequest;