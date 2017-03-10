import React, {Component, PropTypes} from 'react'
import DayPicker, {DateUtils} from "react-day-picker";
import "react-day-picker/lib/style.css";

class CustomDayPicker extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    state = {
        from: null,
        to: null
    };

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    render() {
        const {from, to} = this.state;
        const title = () => {
            if (from && to) {
                return <p>Выбран диапазон с {from.toDateString()} по {to.toDateString()}</p>;
            } else {
                return <p>Выберите диапазон</p>;
            }
        };
        return (
            <div>
                {title()}
                <DayPicker
                    numberOfMonths={1}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    firstDayOfWeek={1}
                />
            </div>
        );
    }
}

export default CustomDayPicker
