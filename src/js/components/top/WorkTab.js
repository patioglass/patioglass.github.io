import React     from 'react';
import WorkTable from './WorkTable';

export default function WorkTab(props) {
    const { works } = props;

    let tabYears = [];
    const targetYear = new Date().getFullYear();

    const workTableComponent = Object.keys(works).map((year, index) => {
        const activeClass = (year == targetYear) ? 'show active' : '';
        const ariaSelected = (year == targetYear) ? "true" : "false";
        // タブ作成
        tabYears.push(
            <li key={index} class="nav-item">
                <a key={index} class={'nav-link ' + activeClass} id={'work' + year + '-tab'} data-toggle="tab" href={'#work' + year} role="tab" aria-controls={'work' + year} aria-selected={ariaSelected}>{year}</a>
            </li>
        );
        // タブの中身
        return  <div key={index} class={'tab-pane fade ' + activeClass} id={'work' + year} role="tabpanel" aria-labelledby={'work' + year + '-tab'}>
                    <WorkTable key={index} {...works[year]} />
                </div>
    });

    return (
        <>
            <ul class="nav nav-tabs" role="tablist">
                {tabYears}
            </ul>
            <div class="tab-content">
                {workTableComponent}
            </div>
        </>
    );
}