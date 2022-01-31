import React from 'react';
import { Link } from 'react-router-dom';
class SearchResult extends React.Component{

    
    componentDidMount(){
        this.props.fetchAllUsers();
    }
    render(){
        if(this.props.users.length === 0) return null;
        const {users} = this.props
        let searchTerms = this.props.location.search.split('=')[1]
        let searchUsers = users.filter(user=>{
            if (user.handle === searchTerms) return user
        })
        // debugger
        return(
            <div className='search-result-container'>
                {searchUsers.length >= 1 ? searchUsers.map(user=>{
                    // debugger
                    return(
                        <div className='search-result-list-items'>
                            <div>
                                <Link to={`/pages/${users.indexOf(user)}`}>{user.handle}</Link>
                                HELLO
                            </div>
                            
                        </div>
                    )
                   
                }
                    
                ): <div className='no-search-result'>No search results found, all handles are unique and capitalization matters!</div>}
            </div>
        )
    }
}

export default SearchResult;