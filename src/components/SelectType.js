import { NOTE_TYPE } from "../data/data"

const SelectType = props => {
    
    return (
        <>
            <h6>Type of Note:</h6>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline3" name="customRadioInline2" className="custom-control-input" value={NOTE_TYPE.TEXT}  onChange={(e) => {
                    props.resetUrl("")
                    props.enable(false)
                    props.callback(e.target.value)}
                }/>
                <label className="custom-control-label" htmlFor="customRadioInline3">Text</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline4" name="customRadioInline2" className="custom-control-input" value={NOTE_TYPE.LINK} onChange={(e) => {
                    props.resetText("")
                    props.resetTitle("")
                    props.enable(false)
                    props.callback(e.target.value)}
                }/>
                <label className="custom-control-label" htmlFor="customRadioInline4">Link</label>
            </div>
        </>
    )
}

export default SelectType;