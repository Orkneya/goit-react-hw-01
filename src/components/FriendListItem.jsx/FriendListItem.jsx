import s from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline}) => {
  return(
     <>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.friend}>{name}</p>
      {isOnline ? <p className={s.onLine}>Online</p> : <p className={s.ofLine}>Offline</p>}
      </>
    )
}
export default FriendListItem;