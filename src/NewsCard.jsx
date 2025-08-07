export default function NewsCard(props){
    // console.log(props.articles)
    return (
        <article>
            <div className="article-text">
                <h1>{props.articles.title}</h1>
                <span>{props.articles.author}</span>
            </div>
            <div className="article-img">
                <img src={props.articles.urlToImage || 'https://placehold.co/600x400'} alt="image" />
                <a href={props.articles.url}>Go to article</a>
            </div>
        </article>
    )
}