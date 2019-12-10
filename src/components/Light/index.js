import React from 'react';
import './Light.css';
import Circle from '../Circle';

const colors = {
    red: {
        backgroundColor: "#cc3232"
    },
    yellow: {
        backgroundColor: "#e7b416"
    },
    green: {
        backgroundColor: "#2dc937"
    },
    grey: {
        backgroundColor: "grey"
    }
};

const data = { "data": [{ "color": "R", "duration": "3s" }, { "color": "Y", "duration": "1s" }, { "color": "R", "duration": "2s" }, { "color": "G", "duration": "5s" }] }

class Light extends React.Component {
    state = {
        red: colors.red,
        yellow: colors.grey,
        green: colors.grey,
        next: "all"
    }

    handleLightChange = () => {
        switch (this.state.next) {
            case "red":
                this.setState({
                    red: colors.red,
                    yellow: colors.grey,
                    green: colors.grey,
                    next: 'yellow'
                });
                break;
            case "yellow":
                this.setState({
                    red: colors.grey,
                    yellow: colors.yellow,
                    green: colors.grey,
                    next: 'green'
                });
                break;
            case "green":
                this.setState({
                    red: colors.grey,
                    yellow: colors.grey,
                    green: colors.green,
                    next: 'all'
                });
                break;
            case "all":
                this.setState({
                    red: colors.red,
                    yellow: colors.yellow,
                    green: colors.green,
                    next: 'red'
                });
                break;
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.handleLightChange();
        }, 2000)
    }

    render() {
        return (
            <div class="light">
                <Circle color={this.state.red} />
                <Circle color={this.state.yellow} />
                <Circle color={this.state.green} />
            </div>
        )
    }
}

export default Light;