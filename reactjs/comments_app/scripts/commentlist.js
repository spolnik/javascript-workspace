var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="Mikolaj Spolnik">This is awesome comment!</Comment>
                <Comment author="Julia Spolnik">This is *another* great comment</Comment>
            </div>
        );
    }
});