
import './App.css'
import friends from "../friends.json"
import userData from "../userData.json";
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import transactions from '../transactions.json'
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default function App(){
  return (
    <>
    <Profile 
         name={userData.username}
         tag={userData.tag}
         location={userData.location}
         image={userData.avatar}
         stats={userData.stats}
    />     
    
    <FriendList friends = {friends} />

    <TransactionHistory items={transactions} />
    </>
  );
};
// import { useState } from 'react'


