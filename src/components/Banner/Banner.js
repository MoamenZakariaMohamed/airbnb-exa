import {useState} from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Search from '../Search/Search'

const Banner = () => {
    const [showSearch,setShowSearch]= useState(false)
    const history=useHistory()
    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch&& <Search/>}
                <Button variant='outlined' className='banner_searchButton' onClick={()=>setShowSearch(!showSearch)}>
                    {showSearch?'Hide':'Search Dates'}
                </Button>
            </div>
            <div className='banner_info'>
                <h1>Get out and stretch your imagination</h1>
                <h4>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h4>
                <Button variant='outlined' onClick={() => history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
