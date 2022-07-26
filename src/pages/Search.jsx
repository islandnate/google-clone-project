import React, { useState } from 'react';
import "./search.css"
import SearchIcon from "@mui/icons-material/Search"
import MicIcon from "@mui/icons-material/Mic"
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Search = ({ hideButtons = false }) => {
    const [{}, dispatch] = useStateValue()

    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const search = (e) => {
        e.preventDefault()
        console.log(input)

        dispatch ({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        navigate("/search")
    }

    return (
        <form className='search'>
            <div className="search__input">
                <SearchIcon className="search__input--icon" />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button className="search__buttons--hidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button className="search__buttons--hidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )
            }


        </form>
    );
}

export default Search;
