import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components"

const AskQuestionModal = ({classname}) => {

    const { user } = useSelector((store) => store.authReducer)
  return (
    <DIV className={classname}>
        <h3>Username: {user.username}</h3>
    </DIV>
  )
}

const DIV = styled.div `
    .showModal {
        display: block;
    }

    .hideModal {
        display: none;
    }
`

export default AskQuestionModal;