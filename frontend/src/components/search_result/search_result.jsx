import React from 'react';

class SearchResult extends React.Component{

    
    componentDidMount(){
        this.props.fetchAllUsers();
    }
    render(){
        if(this.props.users.length === 0) return null;
        const {users} = this.props
        debugger
        return(
            <div>

            </div>
        )
    }
}

export default SearchResult;