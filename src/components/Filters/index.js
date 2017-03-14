import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'
import {connect} from "react-redux";

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        const {articles} = this.props;
        return (
            <div>
                <ArticlesSelect articles={articles}/>
                <DateRange/>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            articles: state.articles
        };
    }
)(Filters)
