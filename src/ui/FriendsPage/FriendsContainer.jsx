import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getFriends, removeFriend} from '../../bll/friendsReducer';
import {WithAuthRedirect} from '../Hoc/WithAuthRedirect';
import {Friends} from './Friends';


const FriendsContainer = props => {
    const friends = useSelector(state => state.friendsPage.friends)
    const loadingFriends = useSelector(state => state.friendsPage.loadingFriends)

    const dispatch = useDispatch();


    const unFollowFriend = React.useCallback((friendId) => {
        dispatch(removeFriend(friendId))
    }, [dispatch])


    useEffect(() => {
        dispatch(getFriends())
    }, [dispatch]);

    return <Friends
        unFollowFriend={unFollowFriend}
        friends={friends}
        loadingFriends={loadingFriends}
    />
};


export default WithAuthRedirect(FriendsContainer);