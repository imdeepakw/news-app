import { useEffect, useState } from "react"
import NewsCard from "./NewsCard"
import NavBarLinks from "./NavBarLink"

export default function App(){
  const myURL = new URL('https://newsapi.org/v2/everything')
  const [firstSearch, setFirstSearch] = useState(myURL.searchParams.get('q'))
  const [language, setLanguage] = useState(myURL.searchParams.get('language'))
  const [newsData, setNewsData] = useState([])

  myURL.searchParams.set('q', 'panama')
  myURL.searchParams.set('searchIn', 'title')
  myURL.searchParams.set('language', 'en')

  console.log(myURL)

  const arrLinks = ['cricket', 'soccer', 'india', 'technology', 'stock market', 'world news']

  async function fetchNews(){
    try {
      const res = await fetch(myURL + `&apiKey=${import.meta.env.VITE_APP_API_KEY}`)
      const data = await res.json()
      console.log(data)
      setNewsData(data.articles)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <>
      <nav>
        <ul>
          {
          arrLinks.map(element => {
            return <NavBarLinks key={element} linkName={element}/>
          })
          }
        </ul>
      </nav>
      {newsData.map((article, index) => {
      return <NewsCard key={index} articles={article}/>
    })}
    </>
  )
}