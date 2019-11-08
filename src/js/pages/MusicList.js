import React             from 'react';
import { Link }          from 'react-router-dom';

import Pagenation        from '../components/list/Pagenation'; 
import Loading           from '../components/layout/Loading';
import Error             from '../components/layout/Error';
import ListPage          from './ListPage';
import MusicHeader       from '../components/list/MusicHeader';
import Music             from '../components/list/Music';

import * as MusicActions from '../actions/ListActions';
import MusicStore        from '../stores/MusicStore';

export default class MusicList extends ListPage {
    constructor() {
        super();
        this.apiHost = 'https://script.google.com/macros/s/AKfycbxqU9-RK2JOMVe4FMUCjHbD3erw2Wk4s11wjHbmV3zdGUQxCVp5/exec';
        this.fetchMusicList = this.fetchMusicList.bind(this);
    }

    componentDidMount() {
        this.setState({
            isMounted: true
        });
        MusicActions.fetchList(this.apiHost);
        MusicStore.on('fetch', this.fetchMusicList);
        MusicStore.on('apiError', this.handleApiError);
    }

    componentWillUnmount() {
        this.setState({
            isMounted: false
        });
        MusicStore.removeListener('fetch', this.fetchMusicList);
        MusicStore.removeListener('apiError', this.handleApiError);
    }

    fetchMusicList() {
        if (this.state.isMounted) {
            const componentStatus = !MusicStore.getLoading() ? 'animeted__fadeIn' : 'hide';
            this.setState({
                list: MusicStore.getList(),
                loading: MusicStore.getLoading(),
                componentStatus: componentStatus,
            });
        }
    }

    render() {
        const { list, showNum, pageCount, loading, componentStatus, apiError } = this.state;
        const MusicComponents = list.map((music, index) => {
            if (index < showNum * (pageCount + 1) && showNum * (pageCount) <= index ) {
                return <Music key={index} {...music} />;
            }
        });
        return (
            <>
                {loading ? (
                    <Loading />
                ) : (
                <section class='wrapper list'>
                    <MusicHeader />
                    {apiError ? (
                        <Error></Error>
                    ) : (
                        <div class={componentStatus}>
                            <ul class='row list__contents'>
                                {MusicComponents}
                            </ul>
                            <Pagenation pageCount={pageCount} listNum={list.length} showNum={showNum} updateShowPage={(pageCount) => { this.updateShowPage(pageCount); }} />
                             <Link to='/' class='btn list__topButton'>トップに戻る</Link>
                        </div>
                    )}
                </section>
                )}
            </>
        );
    }
}