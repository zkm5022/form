import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
  initialValues:{
    name:'',
    email:'',
    password:''
  },
  validate: values => {
    let errors = {};
    if(!values.email) errors.email = 'Required Field';
    if(!values.password) errors.password = 'Required Field';
    return errors;
  },
  onSubmit: (values) => {
    alert("Login Successful");
  }
})
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input id="emailField" type="text" name="email"
          onChange={formik.handleChange}
          value={formik.values.email} />
        {formik.errors.email ? ( <div id="emailError" style={{ color: "red" }}> {formik.errors.email}</div> ) : null}
        <div>Password:</div>
        <input id="pswField" type="text" name="password"
          onChange={formik.handleChange}
          value={formik.values.password} />
        {formik.errors.password ? (<div id="pswError" style={{ color: "red" }}>{formik.errors.password} </div> ) : null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
