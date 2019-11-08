import React from 'react';

export default function WorkItem(props) {
    const { date, title, detail, type, link } = props;
    const dateObj = new Date(date);
    const badgeList = {
        '同人誌' : 'badge-secondary',
        'イラスト': 'badge-secondary',
        'ゲスト参加': 'badge-warning',
        '依頼': 'badge-success',
        'プログラミング': 'badge-info',
        '音楽': 'badge-danger'
    };

    return (
        <tr>
            <td class='workTable__date'>
                {dateObj.getFullYear() + '/' +(dateObj.getMonth() + 1)}
                <br />
                <h5><span class={'badge ' + badgeList[type]}>{type}</span></h5>
            </td>
            <td>
                {title}
                
                {link ? (
                    <a href={link} target='_blank'> 
                    <br />(詳細)</a>
                ) : ''}
            </td>
            <td>
                {detail}
            </td>
        </tr>
    );
}