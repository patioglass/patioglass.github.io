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
            apiError: false,
        }
        this.handleApiError = this.handleApiError.bind(this);
    }

    handleApiError() {
        if (this.state.isMounted) {
            this.setState({
                apiError: true
            });
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