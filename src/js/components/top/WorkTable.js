import React    from 'react';
import WorkItem from './WorkItem';

export default function WorkTable(props) {
    const workItemComponent = Object.keys(props).map((index) => {
        return <WorkItem key={index} {...props[index]} />
    });

    return (
        <div class="table-responsive">
            <table class="table workTable">
                <thead>
                    <tr>
                        <th class='workTable__date'>日付</th>
                        <th>タイトル</th>
                        <th>概要</th>
                    </tr>
                </thead>
                <tbody>
                    {workItemComponent}
                </tbody>
            </table>
        </div>
    );
}