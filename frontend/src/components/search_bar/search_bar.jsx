import React from 'react';
import {withRouter} from 'react-router-dom';


class SearchBar extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            search: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.search !== ''){
            this.props.history.push(`/search?handle=${this.state.search}`)
        }

    }

    update(field){
        return e => this.setState({
            [field] : e.currentTarget.value
        })
    }

    render(){
        return(
            <div className='search-bar-container'>
                <form className='search-bar'>
                    <span className='search-bar-text'>Find Foodies</span>
                    <input className='search-bar-input' type='text'placeholder='Search for foodies by their handle' onChange={this.update('search')}></input>

                    <button
                    type='submit'
                    className='search-bar-submit'
                    onClick={this.handleSubmit}
                    >Find</button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);