
const Link = props => {

    const style = "card text-dark mb-3 " + props.bg

    var text;

    if(props.text) {
        text = props.text;
    } else {
        text = props.url;
    }
    
    return (
        <div className="col-lg-3">
            <div className={style}>
                <div className="card-header font-weight-bold">{props.project}</div>
                <div className="card-body">
                    <a className="card-text" href={props.url}>{text}</a>
                </div>
            </div>
        </div>
    )
}

export default Link;