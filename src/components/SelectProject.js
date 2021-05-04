
const SelectProject = props => {
    
    return (
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Project</label>
                    </div>
                    <select className="custom-select" onChange={(e) => props.callback(e.target.value)}>
                    <option selected>...</option>
                        { Object.keys(props.projects).map((project,idx) =>
                            <option value={props.projects[project]}>
                                    {props.projects[project]}
                                </option>
                        )}
                    </select>
                </div>
            )
}

export default SelectProject;