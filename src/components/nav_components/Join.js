import React, { Component } from 'react'
import {Form, Input, Title, Button, Text} from './FormElements';
import { Formik } from "formik";


export default class Join extends Component {
    render() {
        return (
            <div
            style={{
                display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
            >
            <Title>Join</Title>
            <Formik
              initialValues={{name: '', email: ''}}
              validate={values => {

                // need to add statement for name 
                let errors = {};
                // REGEX
                let regex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                // VALIDATION
                if (!values.email) {
                  errors.email = "Email is required";
                } else if (regex.test(values.email)) {
                  errors.email = "Invalid email address";
                }
        
            }

             }

              onSubmit={values => {
                  console.log(values)
              }}

              render={({
                  touched,
                  errors,
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit
              }) =>
            <Form onSubmit={handleSubmit}>
                <label>
                    Name *
                    { touched.name && errors.name && <Text color="red">{errors.name}</Text>}
                <Input 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    border={errors.name && '1px solid red'} 
                    type="text" name="name" 
                    placeholder="First and Last Name"
                />
                </label>
                <label>
                    Email *
                    { touched.email && errors.email && <Text color="red">{errors.email}</Text>}
                <Input 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    border={errors.email && '1px solid red'} 
                    type="text" name="email" 
                    placeholder="Email"
                />
                </label>
                <Button type="submit">Submit</Button>
                </Form>
                }
                />
            </div>
        
        );
    }
}