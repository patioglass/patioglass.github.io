import React from 'react';
import Modal from 'react-modal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background            : '#444444',
      borderRadius         : '6px'
   }
};
Modal.setAppElement('#app');
export default class ModalWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            className: 'loadingImage',
            modalIsOpen: false
        };
        this.afterOpenModal = this.afterOpenModal.bind(this);
    }
    handleIllustLoaded() {
        this.setState({
            className: ''
        });
    }

    afterOpenModal() {
    }

    render() {
        const { modalIsOpen, changeModalState, illustId } = this.props;
        const illustPath = "https://drive.google.com/uc?id=" + illustId;
        return (
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={() => { changeModalState(false) }}
                style={customStyles}
                contentLabel="Modal"
            >
                <div class='modal__illust'>
                    <img
                        src={illustPath}
                        onLoad={this.handleIllustLoaded.bind(this)}
                    />
                </div>
                <p onClick={() => { changeModalState(false)} } class='modal__close-button'>とじる</p>
            </Modal>
        );
    }
}