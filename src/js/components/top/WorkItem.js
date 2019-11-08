import React from 'react';

export default class WorkItem extends React.Component {
    constructor() {
        super();
        this.badgeList = {
            '同人誌' : 'badge-secondary',
            'イラスト': 'badge-secondary',
            'ゲスト参加': 'badge-warning',
            '依頼': 'badge-success',
            'プログラミング': 'badge-info',
            '音楽': 'badge-danger'
        };
    }
    render() {
        const { date, title, detail, type, link } = this.props;
        const dateObj = new Date(date);
        return (
            <tr>
                <td class='workTable__date'>
                    {dateObj.getFullYear() + '/' +(dateObj.getMonth() + 1)}
                    <br />
                    <h5><span class={'badge ' + this.badgeList[type]}>{type}</span></h5>
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
}