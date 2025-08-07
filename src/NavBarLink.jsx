export default function NavBarLinks(props){
    return (
        <li onClick={props.clickTime} data-id={props.linkName}><a href="#">{props.linkName.toUpperCase()}</a></li>
    )

}