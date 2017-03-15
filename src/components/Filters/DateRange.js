import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from "react-redux";
import {dayClick} from "../../AC/index.js";

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (day) => {
        this.props.dispatchDayClick(day);
    }

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(
    (state) => {
        return {
            dateRange: state.filters.dateRange
        };
    },
    {
        dispatchDayClick: dayClick
    }
)(DateRange);
