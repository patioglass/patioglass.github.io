import React    from 'react';
import { Link } from 'react-router-dom';


export default function AboutItem (props)  {
    const { name, detail } = props;
    const yearParameter = name === 'Illust' ? new Date().getFullYear() : ''

    return (
        <li class='col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4'>
            <img src={'/img/top/sample_'+ name +'.jpg'} />
            <div class='aboutContent__detail'>
                <h3>{name}</h3>
                <p>{detail}</p>
                <Link to={'/list/'+ name + '/' + yearParameter} class="btn btn-dark">もっとみる</Link>
            </div>
        </li>
    );
}