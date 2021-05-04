import { NOTE_TYPE } from "../data/data"

const SelectType = props => {
    
    return (
        <>
            <h6>Type of Note:</h6>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" value={NOTE_TYPE.TEXT}  onChange={(e) => {
                    props.resetUrl("")
                    props.enable(false)
                    props.callback(e.target.value)}
                }/>
                <label className="custom-control-label" htmlFor="customRadioInline1">Text</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" value={NOTE_TYPE.LINK} onChange={(e) => {
                    props.resetText("")
                    props.resetTitle("")
                    props.enable(false)
                    props.callback(e.target.value)}
                }/>
                <label className="custom-control-label" htmlFor="customRadioInline2">Link</label>
            </div>
        </>
    )
}

export default SelectType;