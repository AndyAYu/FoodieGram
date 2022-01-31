import React from 'react';
import { Link } from 'react-router-dom';
class SearchResult extends React.Component{

    
    componentDidMount(){
        this.props.fetchAllUsers();
    }
    render(){
        if(this.props.users.length === 0) return null;
        const {users} = this.props
        let allHandles = users.map(user=>(
            user.handle
        ))
        let searchTerms = this.props.location.search.split('=')[1]
        let searchUsers = users.filter(user=>{
            if (user.handle === searchTerms) return user
        })
        // debugger
        return(
            <div className='search-result-container'>
                {searchUsers.map(user=>{
                    // debugger
                    return(
                        <div className='search-result-list-items'>
                            {user.handle}
                            <Link to={`/pages/${users.indexOf(user)}`}>{user.handle}</Link>
                            HELLO
                        </div>
                    )
                   
                }
                    
                )}
            </div>
        )
    }
}

export default SearchResult;