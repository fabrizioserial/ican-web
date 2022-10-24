import React from 'react'
import { StyledBox } from '../../styledCommonComponents'

const IconButton = ({ icon, onClick }) => {
    return (
        <StyledBox
            css={{
                backgroundColor: 'trasnparent',
                border: "1px solid #F3888F",
                padding: "20px 10px",
                borderRadius: "5px",
                cursor: "pointer"
            }}
            onClick={onClick}
        >
            {icon}
        </StyledBox>
    )
}

export default IconButton