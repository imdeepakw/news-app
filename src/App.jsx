import { useEffect, useState } from "react"
import NewsCard from "./NewsCard"

export default function App(){
  const myURL = new URL('https://newsapi.org/v2/everything')
  const [firstSearch, setFirstSearch] = useState(myURL.searchParams.get('q'))
  const [language, setLanguage] = useState(myURL.searchParams.get('language'))
  const [newsData, setNewsData] = useState([])

  myURL.searchParams.set('q', 'panama')
  myURL.searchParams.set('searchIn', 'title')
  myURL.searchParams.set('language', 'en')

  console.log(myURL)

 

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
      {newsData.map((article, index) => {
      return <NewsCard key={index} articles={article}/>
    })}
    </>
  )
}