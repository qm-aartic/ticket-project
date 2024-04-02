import React from 'react';

function SearchBar({searchTerm, onSearchChange, handleSubmit}) {
    return (
        <form className = "search-bar p-4 flex items-center gap-5" onSubmit = {handleSubmit}>
            <input className = "text-base font-normal p-3 border-[1px] border-solid rounded-[25px] border-black" placeholder = "Search" value = {searchTerm} onChange = {onSearchChange}></input>
            <button className = "p-3 border-[1px] border-solid rounded-[25px] border-black" type = "Submit"> Search </button>
        </form>
    );
}

export default SearchBar;