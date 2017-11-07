import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './sidebar.css';

import { NavButton } from './nav-button';

export class Sidebar extends React.Component {

    private navItems = [
        { label: 'Public Catalog', link: './', color: '#6872E3' },
        { label: 'Private Catalog', link: './', color: '#FC9580' },
        { label: 'Some Catalog', link: './', color: '#20A6E0' },
        { label: 'Awsome Catalog', link: './', color: '#FC8AD2' },
    ];

    public render(): JSX.Element {
        const listItems = this.navItems.map((item, index) =>
            <NavButton key={index} label={item.label} link={item.link} color={item.color} />);

        return (
            <div>
                <div className="rap-sidebar__logo">Logo</div>
                <div className="rap-sidebar__items">{listItems}</div>
            </div>
        );
    }
}
