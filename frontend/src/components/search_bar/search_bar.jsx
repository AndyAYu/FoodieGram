import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class SearchBar extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            search: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        // debugger
        e.preventDefault();
        if (this.state.search !== ''){
            let searchWord = this.state.search;
            this.setState({search: ''})
            let form = document.getElementsByClassName("search-bar-input");
            form[0].value= ''
            this.props.history.push(`/search?handle=${searchWord}`)
        }else{
            let form = document.getElementsByClassName("search-bar-input");
            form[0].value = ''
            this.props.history.push(`/search?handle=all`)
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
                    {/* <span className='search-bar-text'>Find Foodies</span> */}
                    <input className='search-bar-input' type='text'placeholder='Find foodies by handle' onChange={this.update('search')}></input>

                    <button
                    type='submit'
                    className='search-bar-submit'
                    onClick={this.handleSubmit}><FontAwesomeIcon icon={faSearch}/></button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);