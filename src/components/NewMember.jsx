import React from 'react'
import styled from 'styled-components'

export default function NewMember(props) {
  const { details } = props

  
  return (

    <StyledMemberCardDiv>
      <h2>{details.name}</h2>
      <p><span>Email:</span> {details.email}</p>
      <p><span>Role:</span> {details.role}</p>
      {details.id}
    </StyledMemberCardDiv>

  )
}

const StyledMemberCardDiv = styled.div`

  border: 2.5px solid ${(props) =>  props.theme.primaryColor};
  margin: 5% 25%;
  color: ${(props) =>  props.theme.thirdColor};
  font-family:  sans-serif;

  h2{
    color: ${(props) =>  props.theme.primaryColor};
  }
  p{
  
    color: ${(props) =>  props.theme.primaryColor};
    font-size: ${(props) =>  props.theme.fontSize};
  };

  span{
    color: ${(props) =>  props.theme.thirdColor};
    font-weight: bold;
  };


`