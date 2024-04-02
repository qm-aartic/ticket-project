import React, { useState } from 'react';
import doubleLeftArrow from '../../assets/chevrons-left.png';
import leftArrow from '../../assets/chevron-left.png';
import rightArrow from '../../assets/chevron-right.png';
import doubleRightArrow from '../../assets/chevrons-right.png';

function PageBar({pageNumber, setPageNumber, maxPages}) {
    const [searchTerm, setSearchTerm] = useState(pageNumber);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newPageNumber = Number(e.target[0].value);
        if (newPageNumber > 0 && newPageNumber <= maxPages) {
            setPageNumber(newPageNumber);
        }
    }

    function handleArrowClick(pageOffset) {
        setPageNumber(pgNum => {return pgNum + pageOffset;});
        setSearchTerm(pageNumber + pageOffset);
    }

    return (
        <div className = "pagebar-nav h-full mb-8 flex flex-row flex-wrap items-center self-center content-end gap-4">
            <div className = "w-9 h-9">
                {pageNumber - 5 > 0 &&
                    <img className = "w-full h-full" src = {doubleLeftArrow} onClick = {() => handleArrowClick(-5)} alt = ""></img>
                }
            </div>
            <div className = "w-9 h-9">
                {pageNumber - 1 > 0 &&
                    <img className = "w-full h-full" src = {leftArrow} onClick = {() => handleArrowClick(-1)} alt = ""></img>
                }
            </div>
            <form onSubmit = {handleSubmit}>
                <input name = "page" className = "w-9 text-center text-2xl font-medium" onChange = {(e) => {setSearchTerm(e.target.value)}} value = {searchTerm}></input>
            </form>
            <div className = "w-9 h-9">
                {pageNumber + 1 <= maxPages &&
                    <img className = "w-full h-full" src = {rightArrow} onClick = {() => handleArrowClick(1)} alt = ""></img>
                }
            </div>
            <div className = "w-9 h-9">
                {pageNumber + 5 <= maxPages &&
                    <img className = "w-full h-full" src = {doubleRightArrow} onClick = {() => handleArrowClick(5)} alt = ""></img>
                }
            </div>
        </div>
    );
}

export default PageBar;