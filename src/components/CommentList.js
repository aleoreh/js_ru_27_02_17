import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux";
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { loadCommentsByArticle } from "../AC/index";

class CommentList extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    componentWillReceiveProps(props) {
        if (!this.props.isOpen && props.isOpen) {
            this.props.loadCommentsByArticle(props.article.id);
        }
    }

    componentDidUpdate() {
        this.size = this.container.getBoundingClientRect()
    }

    render() {
        const {isOpen, toggleOpen} = this.props
//        console.log('---', this.size)
        return (
            <div ref={this.getContainerRef}>
                <a href="#" onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getContainerRef = (ref) => {
        this.container = ref
        if (ref) {
            this.size = ref.getBoundingClientRect()
        }
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null

        if (!article.comments || !article.comments.length) {
            return <div>
                <h3>
                    No comments yet
                </h3>
                <NewCommentForm articleId={article.id} />
            </div>
        }

        const commentItems = article.comments.map(id => <li key={id}><Comment id={id} /></li>)
        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
                <NewCommentForm articleId={article.id} />
            </div>
        )
    }
}

export default connect(
    null,
    { loadCommentsByArticle }
)(toggleOpen(CommentList));
