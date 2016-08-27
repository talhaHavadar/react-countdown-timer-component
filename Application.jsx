import React, {Component} from 'react';
import CountdownTimer from './components/CountdownTimer';


class Application extends Component {
    constructor(props) {
        super(props);
        this.myTickHandler = this.myTickHandler.bind(this);
    }

    myTickHandler(days, hours, minutes, seconds) {
        console.log(days,hours, minutes, seconds);
    }

    render() {
        return (
            <div id="MMApplication">
                <h1>Coming Soon</h1>
                <CountdownTimer endDate={new Date(2016,9,17,0,0,0,0)} lang="en" />
            </div>
        );
    }
}

export default Application;