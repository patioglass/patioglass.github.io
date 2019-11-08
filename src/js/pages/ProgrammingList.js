import React from 'react';
import { Link } from 'react-router-dom';

import Loading                 from '../components/layout/Loading';
import Pagenation              from '../components/list/Pagenation';
import ListComponent           from '../components/list/ListComponent';
import ProgrammingHeader       from '../components/list/ProgrammingHeader';
import Programming             from '../components/list/Programming';

import * as ProgrammingActions from '../actions/ListActions';
import ProgrammingStore        from '../stores/ProgrammingStore';

export default class ProgrammingList extends ListComponent {
    constructor() {
        super();
        this.fetchProgrammingList = this.fetchProgrammingList.bind(this);
        this.apiHost = 'https://script.google.com/macros/s/AKfycbzCSmKxBiJzVG9mX1LGhOv8geKYZEqVTg_zWmW3OwBqir0cXHFO/exec';
    }

    componentDidMount() {
        this.setState({
            isMounted: true
        });
        ProgrammingActions.fetchList(this.apiHost);
        ProgrammingStore.on('fetch', this.fetchProgrammingList);
    }

    componentWillUnmount() {
        this.setState({
            isMounted: false
        });
        ProgrammingStore.removeListener('fetch', this.fetchProgrammingList);
    }

    fetchProgrammingList() {
        if (this.state.isMounted) {
            const componentStatus = !ProgrammingStore.getLoading() ? 'animeted__fadeIn' : 'hide';
            this.setState({
                list: ProgrammingStore.getList(),
                loading: ProgrammingStore.getLoading(),
                componentStatus: componentStatus,
            });
        }
    }

    render() {
        const { loading, componentStatus, list, showNum, pageCount } = this.state;
        const ProgrammingComponents = list.map((programming, index) => {
            if (index < showNum * (pageCount + 1) && showNum * (pageCount) <= index ) {
                return <Programming key={index} {...programming} />
            }
        });

        return (
            <>
                {loading ? (
                    <Loading />
                ) : (
                <section class='wrapper list'>
                    <ProgrammingHeader />
                    {list.length === 0 ? (
                        <p>情報の取得に失敗しました。再度リロードしてみてください</p>
                    ) : (
                        <>
                        <div class={componentStatus}>
                            <div class='list__contents row card-columns'>
                                {ProgrammingComponents}
                            </div>
                            <Pagenation pageCount={pageCount} listNum={list.length} showNum={showNum} updateShowPage={(pageCount) => { this.updateShowPage(pageCount); }} />

                        </div>
                        </>
                    )}
                    <Link to='/' class='btn list__topButton'>トップに戻る</Link>
                </section>
                )}
            </>
        );
    }
}