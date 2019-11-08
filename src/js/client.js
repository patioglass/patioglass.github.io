import React                              from 'react';
import ReactDOM                           from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScrollToTop                        from './components/layout/ScrollTop';
import Layout                             from './pages/Layout';
import Top                                from './pages/Top';
import IllustList                         from './pages/IllustList';
import ProgrammingList                    from './pages/ProgrammingList';
import MusicList                          from './pages/MusicList';
import '../css/layout.scss';
import '../css/top.scss';
import '../css/list.scss';

const app = document.getElementById('app');
ReactDOM.render(
    <Router>
        <ScrollToTop>
            <Layout>
                <Route exact path='/' component={Top}></Route>
                <Route exact path='/list/Programming' component={ProgrammingList}></Route>
                <Route exact path='/list/Music' component={MusicList}></Route>
                <Route exact path='/list/Illust/:year' component={IllustList}></Route>
            </Layout>
        </ScrollToTop>
    </Router>,
app);