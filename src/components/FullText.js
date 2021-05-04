
const FullText = props => {

    return (
        <>
            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#addNote">
                Show complete text
            </button>

            <div className="modal fade" tabindex="-1" id="addNote" aria-labelledby="addNote" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addNote">Complete text</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.text}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullText;