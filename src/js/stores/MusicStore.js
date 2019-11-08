import ListStore  from './ListStore';
import dispatcher from '../dispatcher';

class MusicStore extends ListStore {
    constructor() {
        super();   
    }
}

const musicStore= new MusicStore;
dispatcher.register(musicStore.handleActions.bind(musicStore));

export default musicStore;