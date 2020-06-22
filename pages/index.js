import Head from 'next/head'
import Content from './content'
import NavBar from './NavBar'

export default function Home() {
  
  return (
      <div>
        <NavBar />
        <Content />
      </div>
  )
}
