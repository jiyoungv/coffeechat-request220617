import GlobalStyle from './styles/GlobalStyle';
import { Layouts } from './styles/Common';
import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <GlobalStyle />
            <Layouts>
                <div>포트폴리오</div>
                <Link to="/review/request">1. 신청하기</Link>
                <Link to="/review/pay">2. 결제하기</Link>
                <Link to="/review/confirm">3. 수락하기</Link>
            </Layouts>
        </>
    );
}

export default App;