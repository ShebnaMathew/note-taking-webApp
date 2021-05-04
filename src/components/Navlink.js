
const Navlink = props => {

    return (
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
               {props.project}
            </a>
        </li>

    )

}

export default Navlink;

