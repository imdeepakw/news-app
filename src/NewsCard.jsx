export default function NewsCard(props){
    console.log(props.articles)
    return (
        <article>
            <h1>{props.articles.title}</h1>
            <a href={props.articles.url}>Link</a>
            <span>{props.articles.author}</span>
            <img src={props.articles.urlToImage} alt="image" />
        </article>
    )
}