import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { StyledBox } from '../../common/styledCommonComponents';
import { logout } from '../../redux/slices/authSlice';
import Button from "../../common/components/button/Button"


function SettingScreen() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

    return <StyledBox
        css={{
            textAlign: 'center',
            fontSize: '23px',
            padding: '100px',
        }}
    >
        {' '}
        Settings

        <Button onClick={() => {
            dispatch(logout());
            navigate("/login")
        }} text="Cerrar sesión" />
    </StyledBox>
}

export default SettingScreen;