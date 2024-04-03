import React, { useState } from 'react';
export const FilterContext = React.createContext();

const FilterContextProvider = ({ children }) => {
    const [filter, setFilter] = useState("All Tickets");

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
}
export default FilterContextProvider;