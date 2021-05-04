
import FullText from './FullText';

const Text = props => {
    const style = "card text-dark mb-3 " + props.bg
    return (
            <div className="col-lg-3">
                <div className={style}>
                    <div className="card-header font-weight-bold">{props.project}</div>
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {
                        ((props.text.length < 100) ? props.text : <FullText text={props.text}/>)
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Text;
