import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpert = () => {
  const [categories, setCategories] = useState(["Samurai X"])

  //handleAdd
  /*  const handleAdd = () => {
   setCategories([...categories, "XMEN"])
    setCategories(cat => [...cat, "XMEN"])
  } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

export default GifExpert
