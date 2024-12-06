import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import userData from "./components/Profile/userData.json";
import friends from "./components/FriendList/friends.json";
// import transactions from "./components/TransactionHistory/transactions.json";

import Profile from "./components/Profile/Profile"
import FriendList from "./components/FriendList/FriendList"

function App() {
  return (
   <>
    <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}/>
        <ul>
          {friends.map(item => {
            console.log(item);
            
            return <li key ={item.id}><FriendList friend={item}/></li>
          })}
        </ul>
    
</>
  )
}
export default App;
