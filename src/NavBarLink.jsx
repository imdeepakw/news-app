export default function NavBarLinks(props){
    console.log(props)
    return (
        <li data-id={props.linkName}><a href="">{props.linkName.toUpperCase()}</a></li>
    )

}