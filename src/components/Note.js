import { NOTE_TYPE } from "../data/data";

import Text from "./Text"
import Link from "./Link"

const Note = props => {
    if (props.type === NOTE_TYPE.TEXT) {
        return (<Text project={props.project} text={props.text} title={props.title} bg={props.bg?props.bg:"bg-warning"}/>)
    } else if (props.type === NOTE_TYPE.LINK) {
        return (<Link project={props.project} text={props.text} url={props.url} bg={props.bg?props.bg:"bg-light"}/>)
    }
    return null;
}


export default Note;