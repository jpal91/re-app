import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom'

const GlobalNav = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const [value, setValue] = useState(location.pathname)
    
    const handleChange = (event, newValue) => {
        setValue(newValue)
        navigate(newValue)
        
    }

    return (
        <React.Fragment>
            <Tabs
                textColor='primary'
                indicatorColor="secondary"
                value={value}
                onChange={handleChange}
            >
                <Tab value='/' label='Interesting' />
                <Tab value='/land' label='Land' />
                <Tab value='/under' label='Under 200' />
            </Tabs>
            
        </React.Fragment>
    )
}

export default GlobalNav