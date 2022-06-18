import PropTypes from 'prop-types';
import GlobalStyle from '../../styles/GlobalStyle';
import { Layouts } from '../../styles/Common';

function PageLayout({ children }) {
    return (
        <>
            <GlobalStyle />
            <Layouts>
                {children}
            </Layouts>
        </>
    )
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageLayout;