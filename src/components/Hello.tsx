import * as React from 'react';

export interface IHelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<IHelloProps, undefined> {

    private qwe() {

    }

    public render(): JSX.Element {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
