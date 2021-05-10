import {NOTE_TYPE} from "../data/data"

const TextInput = props => {

    const isValid = (e) => {

        if(props.field !== "New project") {

            if (e.target.value.length > 0) {
                props.setValue(e.target.value)
            }

            if (props.type === NOTE_TYPE.TEXT) {
                if (props.field === "Title" || props.field === "Text") {
                    if (e.target.value.length > 0) {
                        props.enable(true)
                    } else {
                        props.enable(false)
                    }
                } else {
                    props.enable(false)
                }
            } else {
                if (props.field === "url") {
                    if (e.target.value.length > 0) {
                        props.enable(true)
                    } else {
                        props.enable(false)

                    }   
                }
            }
        } else {
            props.setValue(e.target.value)
        }
    }

    return (

        <div className="form-group align-center">
            <label htmlFor="formGroupExampleInput">{props.field}</label>
            <input type="text" class="form-control" placeholder={props.placeholder} onChange={isValid}/>
        </div>
    )
}

export default TextInput;