import React, { useState } from 'react';

import Wrapper             from '../components/layout/Wrapper';
import ListWrapper         from '../components/list/ListWrapper';
import MusicHeader         from '../components/list/MusicHeader';
import Loading             from '../components/layout/Loading';


export default function MusicList() {
    const [loading, setLoading] = useState(true);
    const apiHost = 'https://script.google.com/macros/s/AKfycbxqU9-RK2JOMVe4FMUCjHbD3erw2Wk4s11wjHbmV3zdGUQxCVp5/exec';

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
                    header={<MusicHeader />}
                    error={<Error />}
                    apiHost={apiHost}
                    type={'Music'}
                    updateLoadingProps={updateLoading}
                >
                </ListWrapper>
            </Wrapper>
        </>
    );
}