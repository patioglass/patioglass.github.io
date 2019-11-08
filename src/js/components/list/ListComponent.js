import React from 'react';

export default class ListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            showNum: 6,
            pageCount: 0,
            loading: true,
            componentStatus: '',
            isMounted: false,
        }
    }

    updateShowPage(pageCount) {
        if (this.state.isMounted) {
            this.setState({
                pageCount: pageCount
            });
        }
    }
}