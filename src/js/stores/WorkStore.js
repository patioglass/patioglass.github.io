import ListStore  from './ListStore';
import dispatcher from '../dispatcher';

class WorkStore extends ListStore {
    constructor() {
        super();
    }
}
const workStore = new WorkStore;
dispatcher.register(workStore.handleActions.bind(workStore));
export default workStore;