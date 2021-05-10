import { NOTE_TYPE } from "../data/data";

import Text from "./Text"
import Link from "./Link"

const Note = props => {
    if (props.type === NOTE_TYPE.TEXT) {
        return (<Text project={props.project} text={props.text} title={props.title} bg={props.color}/>)
    } else if (props.type === NOTE_TYPE.LINK) {
        return (<Link project={props.project} text={props.text} url={props.url} bg={props.color}/>)
    }
    return null;
}


export default Note;