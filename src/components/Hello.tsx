import * as React from 'react';

import * as axios from 'axios';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, undefined> {

    public componentWillMount(): void {
        let headers = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Basic a2V5X01qZzNNRGc1TVRBNU5qVTROV0k1TVRBMU9HTTJZamhtTmpOak1XSTI6'
        });

        fetch('https://api.threadgenius.co/v1/catalog', {
            method: 'GET',
            mode: 'no-cors',
            headers
        }).then(data => {
            console.log(data);
        });

    }


    public render(): JSX.Element {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
