import { useEffect, useState } from "react"
import NewsCard from "./NewsCard"
import NavBarLinks from "./NavBarLink"

export default function App(){
  const myURL = new URL('https://newsapi.org/v2/everything')
  const [search, setSearch] = useState('panama')
  const [newsData, setNewsData] = useState([])

  myURL.searchParams.set('q', search)
  myURL.searchParams.set('searchIn', 'title')
  myURL.searchParams.set('language', 'en')
  myURL.searchParams.set('sortBy', 'relevancy')

  console.log(myURL)

  function handleClick(event){
    console.log(event.currentTarget.dataset.id)
    setSearch(event.currentTarget.dataset.id)
  }

  const arrLinks = ['panama','cricket', 'soccer', 'india', 'technology', 'stock market', 'world news']

  async function fetchNews(){
    try {
      const res = await fetch(myURL + `&apiKey=${import.meta.env.VITE_APP_API_KEY}`)
      const data = await res.json()
      console.log(data.articles)
      setNewsData(data.articles)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchNews()
  }, [search])

  return (
    <>
      <nav>
        <ul>
          {
          arrLinks.map(element => {
            return <NavBarLinks key={element} linkName={element} clickTime={handleClick}/>
          })
          }
        </ul>
      </nav>
      <section className="articles">
        {newsData.map((article, index) => {
      return <NewsCard key={index} articles={article} />
    })}
      </section>
    </>
  )
}