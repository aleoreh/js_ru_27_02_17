import {map} from "futils";
import React, {Component} from "react";

import Comment from "./Comment.jsx";

class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            commentsOpen: false
        };
    }

    render() {
        const {article} = this.props;
        const {isOpen, commentsOpen} = this.state;

        const showComment = (comment) => {
            const res =
                <ul key={comment.id}>
                    <Comment comment={comment}/>
                </ul>;
            return res;
        };

        const showComments = () => {
            const comments = map(showComment, article.comments);
            const res =
                commentsOpen ?
                (comments.length === 0 ?
                 <div>No comments yet</div> :
                 comments) :
                null;
            return res;
        };

        const articleBody =
            isOpen ?
            <div className="article__body">
                <div className="article__text">{article.text}</div>
                <div className="article__comments comments">
                    <div className="article__hideshow"
                       onClick={this.handleShowCommentsClick}>
                        show/hide comments
                    </div>
                    {showComments()}
                </div>
            </div> :
            null;

        const res =
            <div className="article"
                 key={article.id}>
                <div className="article__title"
                     onClick={this.handleClick}>
                    {article.title}
                </div>
                {articleBody}
            </div>;

        return res;
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleShowCommentsClick = (ev) => {
        this.setState({
            commentsOpen: !this.state.commentsOpen
        });
    }
}

export default Article;
