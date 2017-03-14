import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
import {selectArticle} from "../../AC/index.js";

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = (selected) => {
        this.props.dispatchArticleSelected(selected);
    }

    render() {
        const { articles, filters } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filters.selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(
    (state) => {
        return {
            articles: state.articles,
            filters: state.filters
        };
    },
    {
        dispatchArticleSelected: selectArticle
    }
)(SelectFilter);
