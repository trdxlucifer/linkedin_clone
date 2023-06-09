import React,{useMemo, useState} from 'react'
import Home from '../pages/Home'
import Topbar from '../components/common/topbar/Topbar'
import { getCurrentUser } from '../api/FirestoreApi'


const HomeLayout = () => {

  const [currentUser, setCurrentUser] = useState({});

  useMemo(()=>{
    getCurrentUser(setCurrentUser)
  },[])

  // console.log(currentUser)

  return (
    <div>
      <Topbar currentUser={currentUser} />
       <Home currentUser={currentUser} />
    </div>
  
  ) 
}

export default HomeLayout