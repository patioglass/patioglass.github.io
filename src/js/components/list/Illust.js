import React       from 'react';
import ModalWindow from './ModalWindow';

export default class Illust extends React.Component {
    constructor() {
        super();
        this.state = {
            className: 'list__contents--loading',
            modalIsOpen: false
        };
        this.changeModalState = this.changeModalState.bind(this);
    }

    handleIllustLoaded() {
        this.setState({
            className: 'effect-fade effect-scroll'
        });
    }
    
    changeModalState(state) {
        this.setState({
            modalIsOpen: state
        });
    }

    render() {
        const { imagePath } = this.props;
        const { className, modalIsOpen } = this.state;

        const illustId = imagePath.split('=').filter((path, index) => {
            return index === 1;
        })
    
        return (
            <li class='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 list__contents-illust'>
                <ModalWindow illustId={illustId} modalIsOpen={modalIsOpen} changeModalState={(state) => this.changeModalState(state)} />
                
                <img
                    src={imagePath}
                    class={className}
                    onLoad={this.handleIllustLoaded.bind(this)}
                    onClick={() => { this.changeModalState(true) }}
                />
            </li>
        );
    }
}