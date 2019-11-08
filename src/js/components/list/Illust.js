import React, { useState, useEffect }       from 'react';
import ModalWindow                          from './ModalWindow';

export default function Illust(props) {
    const { url } = props;
    const [className, setClassName] = useState('list__contents--loading');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const changeModalState = (state) => {
        setModalIsOpen(state)
    }

    const handleIllustLoaded = () => {
        setClassName('effect-fade effect-scroll')
    }


    const illustId = url.split('=').filter((path, index) => {
        return index === 1;
    })

    return (
        <li class='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 list__contents-illust'>
            <ModalWindow illustId={illustId} modalIsOpen={modalIsOpen} changeModalState={(state) => changeModalState(state)} />
            
            <img
                src={url}
                class={className}
                onLoad={() => handleIllustLoaded()}
                onClick={() => changeModalState(true)}
            />
        </li>
    );
}