import React, {Component} from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: Date.now()
        }
    }

    componentDidMount() {
        this.a = setInterval(() => {console.log("insideSetInterval")
            this.setState({timestamp: Date.now()})
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.a);
    }

    render() {
        console.log("render: ", this.state.timestamp);
        return (
            <div>
                {this.state.timestamp};
            </div>
        );
    }
}

export default Clock;