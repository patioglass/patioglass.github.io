import React, { useState }     from 'react';

import Wrapper                 from '../components/layout/Wrapper';
import ListWrapper             from '../components/list/ListWrapper';
import Loading                 from '../components/layout/Loading';
import ProgrammingHeader       from '../components/list/ProgrammingHeader';


export default function ProgrammingList() {
    const [loading, setLoading] = useState(true);
    const apiHost = 'https://script.google.com/macros/s/AKfycbzCSmKxBiJzVG9mX1LGhOv8geKYZEqVTg_zWmW3OwBqir0cXHFO/exec';

    const updateLoading = (state) => {
        setLoading(state);
    }
    return (
        <>
            {loading ? (
                <Loading />
            ) : ''}
            <Wrapper>
                <ListWrapper
                    header={<ProgrammingHeader />}
                    error={<Error />}
                    apiHost={apiHost}
                    type={'Programming'}
                    updateLoadingProps={updateLoading}
                >
                </ListWrapper>
            </Wrapper>
        </>
    );
}