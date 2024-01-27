import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'
import {Link} from 'react-router-dom';


export default function HomePage() {
  return (
    <div>
      <span> This is Home page</span>

      <TopicBox num="1" letter="a"> 
            <span>  This is a test</span>
        </TopicBox><br/>
        <TopicBox num="2" letter="b"/><br/>
        <TopicBox num="3" letter="c"/><br/>

        <Content/>

        <Link to = "/About">Go to the About page</Link>

        <Link to = "/Contact">Go to the Contact page</Link>

    </div>
  )
}
