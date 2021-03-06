import React, { useState, useEffect } from 'react';
import { Link }                       from 'react-router-dom';

import ListStore                      from '../../stores/ListStore';
import * as ListActions               from '../../actions/ListActions';

import Pagenation                     from './Pagenation'; 
import Illust                         from './Illust';
import Music                          from './Music';
import Programming                    from './Programming';


export default function ListWrapper(props) {
    const [list, setList] = useState([]);
    const [showNum, setShowNum] = useState(6);
    const [pageCount, setPageCount] = useState(0);
    const [componentStatus, setComponentStatus] = useState('');
    const [isMounted, setMounted] = useState(true);
    const [apiError, setApiError] = useState(false);

    const { apiHost, type, year, updateLoadingProps } = props;

    const ListComponents = list.map((data, index) => {
        if (index < showNum * (pageCount + 1) && showNum * (pageCount) <= index ) {
            switch (type) {
                case 'Illust': {
                    return <Illust key={index} {...data}/>;
                    break;
                }
                case 'Music': {
                    return <Music key={index} {...data} />;
                    break;
                }
                case 'Programming': {
                    return <Programming key={index} {...data} />;
                    break;
                }
                default: {
                    break;
                }
            }
        }
    });

    
    useEffect(() => {
        // mount
        setMounted(true);
        updateShowPage(0);
        ListStore.on('fetch', fetchImageList);
        ListStore.on('loading', updateLoading);
        ListStore.on('apiError', handleApiError);
        ListActions.fetchList(apiHost, { year: year });

        // unmount
        return () => {
            setMounted(false);
            ListStore.removeListener('fetch', fetchImageList);
            ListStore.removeListener('loading', updateLoading);
            ListStore.removeListener('apiError', handleApiError);
        }
    }, [year]);

    const handleApiError = () => {
        if (isMounted) {
            setApiError(true);
        }
    }

    const updateShowPage = (pageCount) => {
        if (isMounted) {
            setPageCount(pageCount);
        }
    }

    const fetchImageList = () => {
        if (isMounted) {
            const nextStatus = !ListStore.getLoading() ? 'animeted__fadeIn' : 'hide';
            setList(ListStore.getList());
            updateLoadingProps(ListStore.getLoading());
            setComponentStatus(nextStatus);
        }
    }

    const updateLoading = () => {
        if (isMounted) {
            updateLoadingProps(ListStore.getLoading());
            setComponentStatus('hide');
        }
    }

    return (
        <div class={'list ' + componentStatus}>
            {props.header}
            {apiError ? 
                props.error
            : (
                <>
                    {props.children}
                    <ul class='row list__contents'>
                        {ListComponents}
                    </ul>
                    <Pagenation pageCount={pageCount} listNum={list.length} showNum={showNum} updateShowPage={(pageCount) => { updateShowPage(pageCount); }} />
                    <Link to='/' class='btn list__topButton'>トップに戻る</Link>
                </>
                )
            }
        </div>
    );
}