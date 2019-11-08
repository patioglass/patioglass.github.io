import React, { useState, useEffect } from 'react';

import WorkTab                        from './WorkTab';
import WorkStore                      from '../../stores/WorkStore';
import * as WorkActions               from '../../actions/ListActions';

export default function Works(props) {
    const [works, setWorks] = useState([]);
    const [isMounted, setMounted] = useState(true);
    const apiHost = 'https://script.google.com/macros/s/AKfycbyaUUacDd-ijr6_DntBxoiJhDW6GtwsG5bTfrCxA459g_u9dihz/exec';
    
    // actionでAPIからデータを取得したら反映する
    const fetchWorks = () => {
        if (isMounted) {
            setWorks(WorkStore.getList());
            props.changeLoading(WorkStore.getLoading());
        }
    }

    useEffect(() => {
        // mount
        WorkActions.fetchList(apiHost);
        WorkStore.on('fetch', fetchWorks);
        setMounted(true);

        // unmount
        return () => {
            setMounted(false);
            WorkStore.removeListener('fetch', fetchWorks);
        }
    }, []);

    return (
        <>
            <h1><span>Works</span></h1>
            <p>
                お仕事関連、同人活動、ゲスト参加 etc...の一覧です。(依頼/同人誌/プログラミング/音楽/ゲスト参加)
                <br />
                依頼については、Twitterかメールなどでお願いします。
                <br />
                最低限「使用用途」「サイズ」「締切期間」の提示をしていただければご相談承ります。
            </p>
            {works.length === 0 ? (
                <p>情報の取得に失敗しました。再度リロードしてみてください</p>
            ) : (
                <WorkTab works={works} />
            )}
        </>
    );
}