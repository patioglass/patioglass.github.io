
import React          from 'react';
import { withRouter } from 'react-router-dom';

import Nav            from '../components/layout/Nav';
import Footer         from '../components/layout/Footer';

class Layout extends React.Component {
    render() {
        return (
            <>
                <Nav />
                {this.props.children}
                <Footer />
            </>
        );
    }
}
export default withRouter(Layout);