import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) =>{
return <div className={css.userList}>
    <div className={css.userListImage}>
<img className={css.userImg} src={image} alt="User avatar" width={320}/>
<p className={css.userDescription}>{name}</p>
<p className={css.userDescription}>{tag}</p>
<p className={css.userDescription}>{location}</p>
</div>
<ul className={css.userContainer}>
    <li className={css.containerList}>
    <span className={css.containerTag}>Followers</span>
    <span className={css.containerValues}>{followers}</span>
</li>
    <li className={css.containerList}>
    <span className={css.containerTag}>Views</span>
    <span className={css.containerValues}>{views}</span>
</li>
    <li className={css.containerList}>
    <span className={css.containerTag}>Likes</span>
    <span className={css.containerValues}>{likes}</span>
</li>
</ul>
</div>
}; 
export default Profile;