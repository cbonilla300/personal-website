import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { puppyList } from './data'
import './App.css';
import './index.css';

function App() {
  const [puppies , setpuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(puppyList)

   const featuredPup = puppies.find((pup) => pup.id === featPupId)
   console.log(featuredPup)
   {featPupId &&(
    <div>
      <h2>{featuredPup.name}</h2>
      <ul>
        <li>Age: {featuredPup.age}</li>
        <li>Email: {featuredPup.email}</li>
      </ul>
    </div>
   )}
  return (
    
      
      <div classname = "App"> {
        puppies.map((puppy) => {
          return( <p onClick={()=>{ setFeatPupId("puppy id:", puppy.id)}} key={puppy.id}>{puppy.name}</p>
          
   
          ) 
          
      })
        }
      { featPupId && <p>{ featPupId }</p>}
        
      </div>
      
    
  )
}

export default App
