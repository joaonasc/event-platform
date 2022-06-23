import {gql, useQuery} from "@apollo/client"
import {useEffect} from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERRY = gql`
  query{
    lessons {
      id 
      title
    }
  }
`
interface Lesson {
  id: string;
  title: string
}

function App() {

  const {data} = useQuery<{lessons : Lesson[]}>(GET_LESSONS_QUERRY)
  
  // useEffect(() =>{
  //   client.query({
  //     query: GET_LESSONS_QUERRY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // },[] )

  return (
  <ul>
    {data?.lessons.map(lesson => {
      return <li key={lesson.id}>{lesson.title}</li>
    })}
  </ul>
  )
}

export default App
