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
        
        if (searchTerms === "all") {
            const allResults = users.map(user => (
                <div className='search-result-list-items'>
                    <div className='search-result-info'>
                        <div className='user-profile-picture'>
                            <img src={user.avatar} alt=''></img>
                        </div>
                        <div className='user-page-link' >
                            <Link className='search-result-link' to={`/pages/${users.indexOf(user)}`}>{user.handle}</Link>
                        </div>
                    </div>
                </div>
            )
        )
            return(
                <div className='search-result-container'>
                    <div className="login-header">Search Results</div>
                    {allResults}
                </div>
            )
        }
        return(
            <div className='search-result-container'>
                <div className="login-header">Search Results</div>
                {searchUsers.length >= 1 ? searchUsers.map(user=>{
                    // debugger
                    return(
                        // <div className='search-result-list-items'>
                            <div className='search-result-info'>
                                <div className='user-profile-picture'>   
                                    <img className='user-avatar' src={user.avatar} alt=''></img>
                                </div>
                                <div className='user-page-link' >
                                    <Link className='search-result-link' to={`/pages/${users.indexOf(user)}`}>{user.handle}</Link>
                                </div>
                            </div>
                        // </div>
                    )
                }
                    
                ) : <div  className='no-search-result'>
                    No search results found, all handles are unique and capitalization matters!
                    {/* <div className='hungry-dog-pic'></div> */}
                    </div>}
            </div>
        )
    }
}

export default SearchResult;