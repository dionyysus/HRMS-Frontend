import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Dashboard from './layouts/Dashboard';
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import { Formik } from "formik";
import * as Yup from "yup";
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        {/* <div className = "brand-box">
          <h1>Magic Form</h1>
          <p>Build forms in React without the tears.</p>
        </div> */}
        <div className = "magic-from">
          <Formik 
          initialValues = {{
            name: "",
            email: "",
            agree: false,
            favoriteColor: ""

          }}
          validationSchema = {
            Yup.object({
              name: Yup.string().required("name can't be null"),
              email: Yup.string().email().required("email can't be null"),
              agree: Yup.boolean().required("you have to accept conditions"),
              favoriteColor: Yup.string().required("you have a favorite color").oneOf(["red","blue","green"])
            })
          }
          >
          {

            // props => (
            //   <form>
            //     <h3>Kaydol</h3>
            //     <label htmlFor = "name">Name</label>
            //   </form>
            // )

          }
          </Formik> 
        </div>
        <Dashboard />
      </Container>

    </div>
  );
}

export default App;

