import React     from 'react';
import Jumbotron from '../components/top/Jumbotron';
import About     from '../components/top/About';
import Works     from '../components/top/Works';
import Contact   from '../components/top/Contact';
import Loading   from '../components/layout/Loading';

export default class Top extends React.Component {
    constructor() {
        super();
        this.state = {
            componentStatus: '',
            loading: true
        };
    }
    
    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    changeLoading(state) {
        
        if (this._isMounted) {
            const componentStatus = !state ? 'animeted__fadeIn' : 'hide';
            this.setState({
                componentStatus: componentStatus,
                loading: state
            });
        }
    }

    render() {
        const { loading, componentStatus } = this.state;
        return (
            <>
                {loading ? (
                    <Loading />
                ) : ''}
                <div class={componentStatus}>
                    <Jumbotron />
                    <section class='wrapper'>
                        <div class='row'>
                            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                <About />
                                <Works changeLoading={(state) => { this.changeLoading(state); }} />
                            </div>
                            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                <Contact />
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}