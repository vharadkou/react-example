import * as React from 'react';

export interface IHelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<IHelloProps> {
    public render(): JSX.Element {
        return <span>Hello from {this.props.compiler} and {this.props.framework}!</span>;
    }
}
