import dispatcher        from '../dispatcher';
import axios             from 'axios';
import axiosJsonpAdapter from 'axios-jsonp';

export async function fetchList(apiHost, params = {}) {
    dispatcher.dispatch({
        type: 'REQUEST_FETCH_LIST'
    });

    try {
        const res = await axios.get(apiHost, {
            adapter: axiosJsonpAdapter,
            params: params,
            crossDomain: true,
            timeout : 5000
        });

        dispatcher.dispatch({
            type: 'SUCCESS_FETCH_LIST',
            list: res.data
        });
    } catch (error) {
        console.log(error);
        dispatcher.dispatch({
            type: 'REQUEST_FETCH_ERROR'
        });
    }

}