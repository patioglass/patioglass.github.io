import React    from 'react';
import WorkItem from './WorkItem';

export default class WorkTable extends React.Component {
    render() {
        const workItemComponent = Object.keys(this.props).map((index) => {
            return <WorkItem key={index} {...this.props[index]} />
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
}