class UncontrolledComponent extends React.Component {
    handleSubmit() {
        const name = this.input.value;
    }

    render() {
        return (
            <div>
                <input type="text" ref={(input) => this.input = input} />
                <button onClick={this.handleSubmit}> Sign </button>
            </div>
        )
    }
}

class ControlledComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}

class List extends React.Component {
    constructor() {
        super();
        this.state = { items: [{ name: 'first' }, { name: 'second' }, { name: 'third' }] };
    }

    onDelete(item) {
        this.setState({ items: this.state.items.filter(i => i !== item) });
    }

    render() {
        return (
            <ul>
                {this.state.items.map(item => <Item key={item} onDelete={this.onDelete.bind(this)} />)}
            </ul>
        )
    }
}

class Item extends React.Component {
    render() {
        return (
            <li>
                {this.props.item.name}
                <button onClick={() => this.props.onDelete(this.props.item)}></button>
            </li>
        )
    }
}

class RefExample extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref={input => this.textinput = input} />
                <ChildComponent ref={component => this.ChildComponent = component} />
            </div>
        )
    }
}

class Button extends React.Component {
    render() {
        return (<div>{this.context.text}</div>)
    }
}

class Item extends React.Component {
    render() {
        return (<div>Item <Button>Click</Button></div>)
    }
}

class List extends React.Component {
    getChildContext() {
        return {
            text: 'text'
        };
    }

    render() {
        return (
            <div>
                {this.props.list.map(item => <Item />)}
            </div>
        )
    }
}
