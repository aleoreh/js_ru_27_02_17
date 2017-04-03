import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC/index'
import {Redirect} from 'react-router-dom'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    static contextTypes = {
        test: React.PropTypes.string,
//тут и в других местах: лучше сделай декоратор либо компонент-обертку для локализации, чтоб не обращатся каждый раз к контексту, иначе потом тяжело будет что-либо поменять
        locale: React.PropTypes.string
    };

    render() {
        const {count} = this.props
        if (count > 5) return <Redirect to="/filters"/>
        return (
            <div>
              <div>Context: {this.context.test}</div>
              <h3>{(this.context.locale === "ru" ? "Счётчик: " : "Count: ") + count}</h3>
              <a href="#" onClick={this.handleIncrement}>Increment me</a>
            </div>
        )
    }

    handleIncrement = (ev) => {
        ev.preventDefault()
        this.props.dispatchIncrement()
    }
}

export default connect(state => ({
    count: state.count
}), {
    dispatchIncrement: increment
})(Counter)
