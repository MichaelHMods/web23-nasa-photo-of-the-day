import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 2.5rem;
    color: white;
    
`

const SubTitle = styled.h3`
    
    color: white;
    font-size: 2rem;
    
`

const NavSectionStyles = styled.div`
    
    width: 100%;
    margin: auto 0 7% 0;
    justify-content: center;    
    display: flex;
    
    background: #0000e6;
    
`

const Navigation = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid white;
    
`
const NavParts = styled.a  `
    width:33%;
    color: white; 
    font-size: 1.8rem;
    border: 1px solid white

`

export {Title, NavSectionStyles, SubTitle, NavParts, Navigation };