import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './nav-button.css';

interface NavButtonProps {
    label: string;
    link: string;
    color: string;
}

interface NavButtonState {
    hover: boolean;
}

export class NavButton extends React.Component<NavButtonProps, NavButtonState> {

    public componentWillMount(): void {
        this.setState({ hover: false });
    }

    public render(): JSX.Element {
        let linkStyle: React.CSSProperties;

        if (!this.state.hover) {
            linkStyle = { color: this.props.color };
        } else {
            linkStyle = { backgroundColor: this.props.color };
        }

        return (
            <div className="rap-nav-button" onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()} style={linkStyle}>{this.props.label}</div>
        );
    }

    private toggleHover(): void {
        this.setState({ hover: !this.state.hover });
    }
}
