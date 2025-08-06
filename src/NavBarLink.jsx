export default function NavBarLinks(props){
    // console.log(props)
    return (
        <li onClick={props.clickTime} data-id={props.linkName}><a href="#">{props.linkName.toUpperCase()}</a></li>
    )

}