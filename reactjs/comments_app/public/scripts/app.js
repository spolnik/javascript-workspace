var data = [
    { author: "Julia Spolnik", text: "This is awesome comment" },
    { author: "Mikolaj Spolnik", text: "Hey daddy!" }
];

React.render(
    <CommentBox data={data} />,
    document.getElementById('content')
);