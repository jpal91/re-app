import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'
import { connect } from "react-redux";

import { setLast } from "../actions";


const GlobalNav = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    
    const [value, setValue] = useState(location.pathname)
    //const [last, setLast] = useState(null)
    const [dis, setDis] = useState(true)
    
    const handleChange = (event, newValue) => {
        setValue(newValue)
        navigate(newValue)

        
    }

    useEffect(() => {
        
        if (location.pathname !== value) {
            
            if (location.pathname.includes('prop') && params.id !== 'undefined') {
                handleChange(null, location.pathname)
                //props.setLast(location.pathname)
                setDis(false)
            } else {
                handleChange(null, location.pathname)
            }
        } 
        
        if (location.pathname.includes('prop') && params.id === 'undefined') {
                handleChange(null, props.last)
        }
        
       
    }, [location])

    return (
        <React.Fragment>
            <Tabs
                textColor='primary'
                indicatorColor="secondary"
                value={value}
                onChange={handleChange}
            >
                <Tab value='/' label='Interesting' />
                <Tab  value='/land' label='Land' />
                <Tab  value='/under' label='Under 200' />
                <Tab value='/multi' label='Multi' />
                <Tab value='/keywords' label='Keywords' />
                <Tab  value={`/prop/${params.id}`} label='Prop Info' disabled={dis}/>
            </Tabs>
            
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        last: state.last
    }
}

export default connect(mapStateToProps, { setLast })(GlobalNav)

/*
<Tab value='/' label='Interesting' />
                <Tab value='/land' label='Land' />
                <Tab value='/under' label='Under 200' />
                <Tab value={`/prop/${last}`} label='Prop Info' disabled={dis ? true : false}/>
*/