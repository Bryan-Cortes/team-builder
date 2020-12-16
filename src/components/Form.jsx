import React from 'react'
import styled from 'styled-components'


export default function Form(props) {

  const {formValues, change, submit} = props

  return (
    <StyledFormDiv>
      <form onSubmit={submit}>
        {/* Name Label */}
        <label htmlFor="name">
          Full-Name:{' '}
          <input
          name="name"
          type="text"
          placeholder="Type your name..."
          value={formValues.name}
          onChange={change}
          />
        </label>

        
        {/* Email Label */}
        <label htmlFor="email">
        Email:{' '}
          <input
          name="email"
          type="text"
          placeholder="Type an email..."
          value={formValues.email}
          onChange={change}
          />
        </label> 
        
        
        {/* Role DROPDOWN */}
        <label htmlFor="role">
        Role:{' '}
            <select name="role" value={formValues.role} onChange={change} >
              <option value=''>------Select Role------</option>
              <option value='Frontend Engineer'>Frontend engineer</option>
              <option value='Backend Engineer'>Backend engineer</option>
              <option value='Designer'>Designer</option>
            </select>
        </label>

        <button>Submit</button>
      </form>
    </StyledFormDiv>
  )
}


const StyledFormDiv = styled.div`
  font-size: ${(props) =>  props.theme.fontSize};
  /* border: 1.5px solid ${(props) =>  props.theme.primaryColor}; */
  color: ${(props) =>  props.theme.thirdColor};
  padding: 2%;
  font-family: sans-serif;
  font-weight: bold;

  label{
    margin: 0 2%;
  }


  button{
    background-color: ${(props) =>  props.theme.thirdColor};
    border-radius: 10px;
    border: none;
    padding: 1%;
    font-weight: bold;
    font-size: ${(props) =>  props.theme.fontSize};
    color: ${(props) =>  props.theme.primaryColor};
  }
`