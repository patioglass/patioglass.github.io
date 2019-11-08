import React, { useState } from 'react';
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
export default function ModalWindow(props) {
    const { modalIsOpen, changeModalState, illustId } = props;
    const illustPath = "https://drive.google.com/uc?id=" + illustId;

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => { changeModalState(false) }}
            style={customStyles}
            contentLabel="Modal"
        >
            <div class='modal__illust'>
                <img
                    src={illustPath}
                />
            </div>
            <p onClick={() => { changeModalState(false)} } class='modal__close-button'>とじる</p>
        </Modal>
    );
}