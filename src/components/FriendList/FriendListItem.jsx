import clsx from "clsx";
import css from "./FriendList.module.css"

const FriendListItem = ({avatar, name, isOnline}) => {
return (
<div className={css.avatarUser}>
<img className={css.avatarImg} src={avatar} alt="Avatar" width="48" />
<p className={css.avatarDescription}>{name}</p>
<p className={clsx(css.avatarIsOffline, {[css.avatarIsOnline]: isOnline})}>{isOnline ? "Online": "Offline"}</p>
</div>)};

export default FriendListItem;



