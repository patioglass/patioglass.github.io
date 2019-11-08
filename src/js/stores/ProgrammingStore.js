import ListStore  from './ListStore';
import dispatcher from '../dispatcher';

class ProgrammingStore extends ListStore {
    constructor() {
        super();
    }
}

const programmingStore= new ProgrammingStore;
dispatcher.register(programmingStore.handleActions.bind(programmingStore));

export default programmingStore;