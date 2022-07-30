import React from 'react';
import "./searchpage.css"
import { useStateValue } from "./StateProvider"
import UseGoogleSearch from './useGoogleSearch';
import Response from "./Response.jsx"
import { Link } from "react-router-dom"
import Search from "./Search"
import SearchIcon from "@mui/icons-material/Search"
import DescriptionIcon from "@mui/icons-material/Description"
import ImageIcon from "@mui/icons-material/Image"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import RoomIcon from "@mui/icons-material/Room"
import MoreVertIcon from "@mui/icons-material/MoreVert"

const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue()

    // MOCK API CALL
    // const data = Response
    // LIVE API CALL
    const { data } = UseGoogleSearch(term)

    console.log(data)
    return (
        <div className='searchPage'>
            <div className="search__page--header">
                <Link to="/">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt=""
                        className="search__page--logo"
                    />
                </Link>
                <div className="search__page--header--body">
                    <Search hideButtons />
                    <div className="search__page--options">
                        <div className="search__page--options--left">
                            <div className="search__page--option">
                                <SearchIcon />
                                <Link to="/search">All</Link>
                            </div>
                            <div className="search__page--option">
                                <DescriptionIcon />
                                <Link to="/search">News</Link>
                            </div>
                            <div className="search__page--option">
                                <ImageIcon />
                                <Link to="/search">Images</Link>
                            </div>
                            <div className="search__page--option">
                                <LocalOfferIcon />
                                <Link to="/search">Shopping</Link>
                            </div>
                            <div className="search__page--option">
                                <RoomIcon />
                                <Link to="/search">Maps</Link>
                            </div>
                            <div className="search__page--option">
                                <MoreVertIcon />
                                <Link to="/search">More</Link>
                            </div>
                        </div>
                        <div className="search__page--options--right">
                            <div className="search__page--option">
                                <Link to="/search">Settings</Link>
                            </div>
                            <div className="search__page--option">
                                <Link to="/search">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="search__page--results">
                    <p className="search__page--result--count">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) seconds for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className="search__page--result">
                            <a target="_blank" className="search__page--result--link" href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img src={item.pagemap?.cse_image[0]?.src} alt="" className="search__page--result--img" />
                                )}
                                {item.displayLink} ▽
                            </a>
                            <a target="_blank" className="search__page--result--title" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p target="_blank" className="search__page--result--snippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )

            }

        </div>
    );
}

export default SearchPage;
