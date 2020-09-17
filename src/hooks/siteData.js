import React, { createContext, useContext } from 'react'

const SiteDataContext = createContext()

function SiteDataProvider({ siteData, children }) {

    return (
        <SiteDataContext.Provider
            value={ siteData }
        >
            { children }
        </SiteDataContext.Provider>
    )

}

function useSiteData() {
    return useContext(SiteDataContext)
}

export {
    useSiteData
}

export default SiteDataProvider