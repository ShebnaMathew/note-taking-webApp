const NewOrExistingProj = props => {
    
    return (
        <>
            <h6>Create a new project or choose to add to an existing project ?</h6>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" value="New"  onChange={(e) => {
                    props.callback(e.target.value)}
                }/>
                <label className="custom-control-label" htmlFor="customRadioInline1">New</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" value="Existing" onChange={(e) => {
                    props.callback(e.target.value)}
                }/>
                <label className="custom-control-label" htmlFor="customRadioInline2">Existing</label>
            </div>
        </>
    )
}

export default NewOrExistingProj;