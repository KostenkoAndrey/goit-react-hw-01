import clsx from "clsx";
import css from "./FriendList.module.css"

const FriendList = ({friends}) => { 
return (<ul className="friendsList">
{friends.map(({avatar, name, isOnline, id}) => (
<li key={id}>
<div className={css.avatarUser}>
<img className={css.avatarImg} src={avatar} alt="Avatar" width="48" />
<p className={css.avatarDescription}>{name}</p>
<p className={clsx(css.avatarIsOffline, {[css.avatarIsOnline]: isOnline})}>{isOnline ? "Online": "Offline"}</p>
</div>
</li>
))}
</ul>)
}
export default FriendList;