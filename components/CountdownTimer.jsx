import React, {Component} from 'react';

class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        var end_ms = props.endDate.getTime();
        var now_ms = new Date().getTime();
        var remainingTimeInMs = 0;
        this.tickHandler = this.tickHandler.bind(this);
        
        if (now_ms < end_ms) {
            remainingTimeInMs = end_ms - now_ms;
        }
        this.state = {
            remainingSeconds: remainingTimeInMs/1000
        }
    }

    format(formats) {
        var args = Array.prototype.slice.call(arguments, 1);
        return formats.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    }

    tickHandler() {
        if (this.state.remainingSeconds <= 0) {
            clearInterval(this.interval);
        }
        this.setState({
            remainingSeconds: this.state.remainingSeconds - 1
        });
    }
    
    getRemainingString(lang="en") {

        var totalRemainingSeconds = Math.floor(this.state.remainingSeconds);

        var seconds = Math.floor(totalRemainingSeconds % 60);

        totalRemainingSeconds = totalRemainingSeconds / 60;

        var minutes = Math.floor(totalRemainingSeconds % 60);

        totalRemainingSeconds = totalRemainingSeconds / 60;
        var hours = Math.floor(totalRemainingSeconds % 24);
        var days = Math.floor(totalRemainingSeconds / 24);
        if (this.props.customTickHandler !== undefined) {
            this.props.customTickHandler(days, hours, minutes, seconds);
        }
        if (lang === "tr") {
            return this.format("{0} Gün {1} Saat {2} Dakika {3} Saniye", days, hours, minutes, seconds);            
        }
        return this.format("{0} days {1} hours {2} minutes {3} seconds", days, hours, minutes, seconds);

    }

    componentWillMount() {
        this.interval = setInterval(this.tickHandler, 1000);
    }
    
    render() {
        var content = this.getRemainingString(this.props.lang)
        if (!this.props.onlyFunctional)
            return (
                <div className="countdown-timer">
                    {content}
                </div>
            );
        else {
            return null;
        }
    }
}
CountdownTimer.propTypes = {
    endDate: React.PropTypes.instanceOf(Date).isRequired,
    lang: React.PropTypes.string,
    customTickHandler: React.PropTypes.func,
    onlyFunctional: React.PropTypes.bool
}
CountdownTimer.defaultProps = {
    lang: "en",
    customTickHandler: undefined,
    onlyFunctional: false
}
export default CountdownTimer;