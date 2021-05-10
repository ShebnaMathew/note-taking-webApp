export const NOTE_TYPE = {
    TEXT: "text",
    LINK: "link"
}

export const NO_PROJECT = "no project"

let data = {
    "Learn React" : [
        {
            type: NOTE_TYPE.TEXT,
            title: "Create a new project",
            text: "cd to the project directory\nnpx create-react-app project-name\ncd project-name\nnpm start",
            color: "bg-info"
        },
        {
            type: NOTE_TYPE.LINK,
            url: "https://reactjs.org/docs/getting-started.html",
            text: "React docs",
            color: "bg-light"
        },
        {
            type: NOTE_TYPE.LINK,
            url: "https://reactstrap.github.io/",
            text: "Reactstrap docs",
            color: "bg-light"
        }
    ],
    [NO_PROJECT]: [
        {
            type: NOTE_TYPE.TEXT,
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Justo nec ultrices dui sapien eget mi proin sed libero. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Nisi quis eleifend quam adipiscing. Sit amet tellus cras adipiscing enim eu. Tincidunt tortor aliquam nulla facilisi cras fermentum. Orci phasellus egestas tellus rutrum. Tortor dignissim convallis aenean et. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Purus semper eget duis at tellus. Ut consequat semper viverra nam libero justo laoreet sit amet. Sed enim ut sem viverra aliquet eget. Amet volutpat consequat mauris nunc congue nisi. Aliquet nibh praesent tristique magna.",
            color: "bg-warning"
        },
        {
            type: NOTE_TYPE.LINK,
            url: "https://loremipsum.io/generator/",
            text: "Lorem Ipsum generator",
            color: "bg-light"
        }
    ]
}

export default data
