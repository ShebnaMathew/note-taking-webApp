const AddCancel = props => {

    const enable = props.enable
    const state = "btn btn-info btn-lg " + (enable ? "":"disabled")

    
    return (
        <>
            <div data-bs-toggle="collapse" data-bs-target="#collapseAdd">
                <div className={state} tabindex="-1" role="button" aria-disabled="true" onClick={() => {
                    
                    let note = {project: props.project, type: props.type, title: props.title, text: props.text, url:props.url, color:props.color}
                    props.clearForm()
                    props.callback(note)
                }}>
                    Add
                </div>
                <div className="btn btn-light btn-lg add-cancel" tabindex="-1" role="button">Cancel</div>
                
            </div>
        </>
        
    )
}

export default AddCancel;