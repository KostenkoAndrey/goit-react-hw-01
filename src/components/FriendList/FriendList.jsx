import FriendListItem from "./FriendListItem"

const FriendList = ({friends}) => { 
return (<ul className="friendsList">
{friends.map(({ avatar, name, isOnline, id })=> (<li key={id}>
        <FriendListItem {...{avatar, isOnline, name}}/>
    </li>
))}
</ul>)
}
export default FriendList;