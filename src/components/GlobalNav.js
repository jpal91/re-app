import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'
import { connect } from "react-redux";

import { setLast } from "../actions";



const GlobalNav = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const [value, setValue] = useState(location.pathname)
    
    const handleChange = (event, newValue) => {
        setValue(newValue)
        navigate(newValue)

        
    }

    useEffect(() => {

        if (props.last === location.pathname) {
            setValue(props.last)
        }
        
       
    }, [location, props.last])

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
                <Tab  value='/under' label='Under 300' />
                <Tab value='/multi' label='Multi' />
                <Tab value='/keywords' label='Keywords' />
                <Tab  value={`${props.last}`} label='Prop Info' disabled={props.last === null ? true : false}/>
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