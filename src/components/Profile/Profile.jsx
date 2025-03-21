import s from "./Profile.module.css"
export default function Profile({name, tag, location, image, stats}){
  return(
    <div className={s.main}>
  <div>
    <img className={s.object}
      src={image}
      alt="User avatar"
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.tag}>{location}</p>
  </div>

  <ul className={s.list}>
    <li className={s.item}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={s.item}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={s.item}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}