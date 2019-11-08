import React, { useState, useEffect }     from 'react';
import Jumbotron                          from '../components/top/Jumbotron';
import Wrapper                            from '../components/layout/Wrapper';
import About                              from '../components/top/About';
import Works                              from '../components/top/Works';
import Contact                            from '../components/top/Contact';
import Loading                            from '../components/layout/Loading';

export default function Top() {
    const [componentStatus, setComponentStatus] = useState('');
    const [loading, setLoading] = useState(true);
    const [isMounted, setMounted] = useState(true);

    const changeLoading = (state) => {
        if (isMounted) {
            const nextStatus = !state ? 'animeted__fadeIn' : 'hide';
            setComponentStatus(nextStatus);
            setLoading(state);
        }
    }

    useEffect(() => {
        // mount
        setMounted(true);

        // unmount
        return () => {
            setMounted(false);
        }
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : ''}
            <div class={componentStatus}>
                <Jumbotron />
                <Wrapper>
                    <About />
                    <Works changeLoading={(state) => { changeLoading(state); }} />
                    <Contact />
                </Wrapper>
            </div>
        </>
    );
}