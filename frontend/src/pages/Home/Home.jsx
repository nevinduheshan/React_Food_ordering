import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Hearder/Header'
import ExpolreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {

  const[category,setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExpolreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home