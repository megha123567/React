import React from "react";
import {Field, Formik, Form, ErrorMessage} from "formik"
import * as Yup from 'yup';
import UserService from "../../service/userService";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function UserCreate(){
    return(
        <>
        <div className="container">
            <div>
            <h1>Form</h1>
            </div>
           <div>
            <Formik
            initialValues={{firstName: '', lastName: '', email: '', password: '', phone: '' }}
            validationSchema = {
                Yup.object().shape({
                    email: Yup.string().email().required('Email is required'),
                    password: Yup.string().required('password is required').min(6, 'Please enter a name more than 6 characters')
                })
            }
            onSubmit = {async (values, {setSubmitting})=>{
                var service = new UserService();
                var result = await service.user(values);
                if(!result.success){
                    alert(result.errors[0]);
                    return;
                }
                alert('success')
            }}
            >
                {({isSubmitting})=>(
                    <Form>
                        <div>
                            <label for="firstName">First Name</label>y
                            <Field type="text" name="firstName" id="firstName" placeholder="firstName"/>
                        </div>
                        <div>
                            <label for="lastName">Last Name</label>
                            <Field type="text" name="lastName" id="lastName" placeholder="lastName"/>
                        </div>
                        <div>
                            <label for='email'>Email</label>
                            <Field type="email" name="email" id="email" placeholder="abc@email.com"/>
                            <ErrorMessage name="email" className="text-danger"/>
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <Field type="password" name="password" id="password"/>
                            <ErrorMessage name="password" className="text-dangetr"/>
                        </div>
                        <div>
                            <label for="phone">Phone</label>
                            <Field type="number" name="phone" id="phone"/>
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">Save</button>
                        </div>
                    </Form>
                )}

            </Formik>
           </div>
        </div>
        </>
    )
}

export default UserCreate;