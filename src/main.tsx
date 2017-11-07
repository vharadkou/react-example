import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './main.css';

import {
    Hello,
    Sidebar
} from './components';

ReactDOM.render(
    <div>
        <div className="rap-sidebar">
            <Sidebar />
        </div>
        <div className="rap-content">
            <Hello compiler="TypeScript" framework="React" />
        </div>
    </div>,
    document.getElementById('example'),
);
