import React, { useState, useEffect } from 'react';

import Wrapper                        from '../components/layout/Wrapper';
import Error                          from '../components/layout/Error';
import IllustHeader                   from '../components/list/IllustHeader';
import IllustDropDownMenu             from '../components/list/IllustDropDownMenu';
import Loading                        from '../components/layout/Loading';


import ListWrapper from '../components/list/ListWrapper';

export default function IllustList(props) {
    const [currentYear, setCurrentYear] = useState(props.match.params.year);
    const [loading, setLoading] = useState(true);
    const apiHost = 'https://script.google.com/macros/s/AKfycbwak1hBoAi6BPGFfDAa38CFsmTo7SWto5qGVgOTD2MPLcapSdSz/exec';

    const updateLoading = (state) => {
        setLoading(state);
    }
    useEffect(() => {
        // mount
        setCurrentYear(currentYear);
    });

    return (
        <>
            {loading ? (
                <Loading />
            ) : ''}
            <Wrapper>
                <ListWrapper
                    header={<IllustHeader />}
                    error={<Error />}
                    apiHost={apiHost}
                    type={'Illust'}
                    year={currentYear}
                    updateLoadingProps={updateLoading}
                >
                    <IllustDropDownMenu currentSelectedYear={currentYear} updateList={(year) => {
                        setCurrentYear(year);
                    }} />
                </ListWrapper>
            </Wrapper>
        </>
    );
}