import { EventEmitter } from 'events';

export default class ListStore extends EventEmitter {
    constructor() {
        super();
        this.list = [];
        this.loading = true;
    }

    getList() {
        return this.list;
    }

    updateList(list) {
        this.list = list;
        this.emit('fetch');
    }

    getLoading() {
        return this.loading;
    }

    updateLoading(state) {
        this.loading = state;
        this.emit('loading');
    }

    handleActions(action) {
        switch(action.type) {
            case 'REQUEST_FETCH_LIST': {
                this.updateLoading(true);
                break;
            }
            case 'SUCCESS_FETCH_LIST': {
                this.updateLoading(false);
                this.updateList(action.list);
                break;
            }
            case 'REQUEST_FETCH_ERROR': {
                this.updateLoading(false);
                this.updateList([]);
                this.emit('apiError');
                console.log('API error');
                break;
            }
        }
    }
}