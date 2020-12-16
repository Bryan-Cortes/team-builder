import React, { useState } from 'react';
import Form from './components/Form'
import NewMember from './components/NewMember'
import './App.css';
import styled from 'styled-components'
// import logo from './logo.svg';

/// TEXT INPUTS && DROPDOWN  ///
const initialFormValues = {
  name:'',
  email:'',
  role: '',
};

function App() {
  //Values of the forms
  const [formValues, setFormValues] = useState(initialFormValues);

  //Storing the values from the form.
  const [formTeamMembers,setFormTeamMembers] = useState([]);

   //The function to handle the onChange inside of the form
  const onChange = (event)=>{
    
      const {name, value} = event.target;
      setFormValues({...formValues, [name]: value});
  };

  //Function for submitting the data to state.
  const submit = (event) =>{
    //Prevents the default behavious of submit which is reloading the page
    event.preventDefault();

    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    /// prevent further action if either username or email or role is empty string after trimming
    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return;

    //adding the data to state
    setFormTeamMembers([...formTeamMembers,newTeamMember]);
    setFormValues(initialFormValues);
    
  };

  return (
    <div className="App">
      <StyledH1>
        Team List:
      </StyledH1>  
      
      <div>
        <Form formValues={formValues} change={onChange} submit={submit}/>
      </div>
      
      <div>
        {formTeamMembers.map((member)=> {
              return <NewMember key={member.id} details={member}/>
          })}
      </div>
    </div>
  );
}

export default App;

const StyledH1 = styled.h1`
  color: ${(props) =>  props.theme.primaryColor};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4rem;
  text-shadow: 1px 1px 5px #f9813a;
  
`