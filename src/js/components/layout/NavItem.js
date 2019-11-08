import React    from 'react';
import { Link } from 'react-router-dom';

export default class NavItem extends React.Component {
    render() {
        const { item } = this.props;
        const dropItem = item.dropdown.map((dropItem, index) => {
            return <Link key={index} to={dropItem.href} class="dropdown-item">{dropItem.name}</Link>
        })

        return (
            <>
            {dropItem.length === 0 ? (                
                <li class="nav-item">
                    <Link to={item.href} class="nav-link">{item.name}</Link>
                </li>
            ) : (
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href={item.href} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {item.name}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        {dropItem}
                    </div>
                </li>
            )}
            </>
        );
    }
}