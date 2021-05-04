
const SelectColor = props => {
    return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Color</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(e) => props.callback(e.target.value)}>
                    <option selected value="bg-warning">Yellow</option>
                    <option value="bg-info">Blue</option>
                    <option value="bg-light">White</option>
                </select>
            </div>
        )
}

export default SelectColor;