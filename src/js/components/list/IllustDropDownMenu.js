import React    from 'react';
import { Link } from 'react-router-dom';

export default function IllustDropDownMenu(props) {
    const { currentSelectedYear, updateList } = props;
    const firstYear = 2017;
    const latestYear = new Date().getFullYear();

    const yearMenu = Array(latestYear - firstYear + 1).fill(firstYear).map((year, index) => {
        return <Link onClick={() => { updateList(year + index) }} key={(year + index)} to={'/list/Illust/' + (year + index)}  class='dropdown-item'>{ (year + index) + '年' }</Link>;
    });

    return (
        <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {currentSelectedYear}
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {yearMenu}
            </div>
        </div>
    );
}