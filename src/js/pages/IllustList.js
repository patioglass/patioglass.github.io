import React              from 'react';
import { Link }           from 'react-router-dom';

import Pagenation         from '../components/list/Pagenation'; 
import Loading            from '../components/layout/Loading';
import Error              from '../components/layout/Error';
import ListPage           from './ListPage';
import IllustHeader       from '../components/list/IllustHeader';
import IllustDropDownMenu from '../components/list/IllustDropDownMenu';
import Illust             from '../components/list/Illust';

import * as IllustActions from '../actions/ListActions';
import IllustStore        from '../stores/IllustStore';

export default class IllustList extends ListPage {
    constructor() {
        super();
        this.fetchImageList = this.fetchImageList.bind(this);
        this.updateLoading = this.updateLoading.bind(this);
        this.currentYear = 2017;
        this.apiHost = 'https://script.google.com/macros/s/AKfycbwak1hBoAi6BPGFfDAa38CFsmTo7SWto5qGVgOTD2MPLcapSdSz/exec';
    }

    componentDidMount() {
        this.setState({
            isMounted: true
        });
        this.currentYear = this.props.match.params.year;
        IllustStore.on('fetch', this.fetchImageList);
        IllustStore.on('loading', this.updateLoading);
        IllustStore.on('apiError', this.handleApiError);
        IllustActions.fetchList(this.apiHost, { year: this.currentYear });
    }

    componentWillUnmount() {
        this.setState({
            isMounted: false
        });
        IllustStore.removeListener('fetch', this.fetchImageList);
        IllustStore.removeListener('loading', this.updateLoading);
        IllustStore.removeListener('apiError', this.handleApiError);
    }

    // タブで表示年代が変わったタイミングで呼ばれる
    updateList(year) {
        this.currentYear = year;
        this.updateShowPage(0);
        IllustActions.fetchList(this.apiHost, { year: year });
    }

    updateLoading() {
        this.setState({
            loading: IllustStore.getLoading(),
            componentStatus: 'hide'
        });
    }

    fetchImageList() {
        if (this.state.isMounted) {
            const componentStatus = !IllustStore.getLoading() ? 'animeted__fadeIn' : 'hide';
            this.setState({
                list: IllustStore.getList(),
                loading: IllustStore.getLoading(),
                componentStatus: componentStatus,
            });
        }
    }

    render() {
        const { list, showNum, pageCount, loading, componentStatus, apiError } = this.state;
        const  currentYear = this.props.match.params.year;
        const IllustComponents = list.map((image, index) => {
            if (index < showNum * (pageCount + 1) && showNum * (pageCount) <= index ) {
                return <Illust key={index} imagePath={image.url}/>;
            }
        });
        return (
            <>
                {loading ? (
                    <Loading />
                ) : (
                <section class='wrapper list'>
                    <div class={componentStatus}>
                        <IllustHeader />
                        {apiError ? (
                            <Error></Error>
                        ) : (
                            <>
                            <IllustDropDownMenu currentSelectedYear={currentYear} updateList={this.updateList.bind(this)} />
                            <ul class='row list__contents'>
                                {IllustComponents}
                            </ul>
                            <Pagenation pageCount={pageCount} listNum={list.length} showNum={showNum} updateShowPage={(pageCount) => { this.updateShowPage(pageCount); }} />
                            <Link to='/' class='btn list__topButton'>トップに戻る</Link>
                            </>
                        )}
                    </div>
                </section>
                )}
            </>
        );
    }
}