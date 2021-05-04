import { useState } from "react"
import {NOTE_TYPE} from "../data/data"

const TextInput = props => {

    const isValid = (e) => {

        if(props.field !== "Create new Project") {

            if (e.target.value.length > 0) {
                props.setValue(e.target.value)
            }

            if (props.type === NOTE_TYPE.TEXT) {
                if (props.field === "Title" || props.field === "Text") {
                    if (e.target.value.length > 0) {
                        setErrorStyle("form-control")
                        props.enable(true)
                    } else {
                        setErrorStyle("form-control red-border")
                        props.enable(false)
                    }
                } else {
                    setErrorStyle("form-control")
                    props.enable(false)
                }
            } else {
                if (props.field === "url") {
                    if (e.target.value.length > 0) {
                        setErrorStyle("form-control")
                        props.enable(true)
                    } else {
                        setErrorStyle("form-control red-border")
                        props.enable(false)
                    }   
                } else {
                    setErrorStyle("form-control")
                    props.enable(false)
                }
            }
        } else {
            props.setValue(e.target.value)
        }
    }

    const [errorStyle, setErrorStyle] = useState("form-control")

    return (

        <div className="form-group align-center">
            <label htmlFor="formGroupExampleInput">{props.field}</label>
            <input type="text" class={errorStyle} placeholder={props.field} onChange={isValid}/>
        </div>
    )
}

export default TextInput;