import ListStore  from './ListStore';
import dispatcher from '../dispatcher';

class IllustStore extends ListStore {
    constructor() {
        super();   
    }
}

const illustStore= new IllustStore;
dispatcher.register(illustStore.handleActions.bind(illustStore));

export default illustStore;