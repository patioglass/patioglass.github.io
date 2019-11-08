import React            from 'react';

import WorkTab          from './WorkTab';
import WorkStore        from '../../stores/WorkStore';
import * as WorkActions from '../../actions/ListActions';

export default class Works extends React.Component {
    constructor() {
        super();
        this.state = {
            works: [],
            isMounted: false
        }
        this.fetchWorks = this.fetchWorks.bind(this);
        this.apiHost = 'https://script.google.com/macros/s/AKfycbyaUUacDd-ijr6_DntBxoiJhDW6GtwsG5bTfrCxA459g_u9dihz/exec';
    }

    componentDidMount() {
        this.setState({
            isMounted: true
        });
        WorkActions.fetchList(this.apiHost);
        WorkStore.on('fetch', this.fetchWorks);
    }

    componentWillUnmount() {
        this.setState({
            isMounted: false
        });
        WorkStore.removeListener('fetch', this.fetchWorks);
    }

    fetchWorks() {
        if (this.state.isMounted) {
            this.setState({
                works: WorkStore.getList()
            })
            this.props.changeLoading(WorkStore.getLoading());
        }
    }

    render() {
        const { works } = this.state;
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
}