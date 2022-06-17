import PropTypes from 'prop-types';
import GlobalStyle from '../../styles/GlobalStyle';
import { Layouts } from '../../styles/Common';
import BackHeader from '../BackHeader';

function PageLayout ({ children }) {
    return (
        <>
            <GlobalStyle />
            <Layouts>
                <BackHeader />
                {children}
            </Layouts>
        </>
    )
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageLayout;