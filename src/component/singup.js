import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
    const initialValues = {
        email: '',
        firstName: '',
        lastName: '',
        dob: '',
        sex: '',
        genderInfo: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        firstName: Yup.string().required('Legal first name is required'),
        lastName: Yup.string().required('Legal last name is required'),
        dob: Yup.string().required('Date of birth is required'),
        sex: Yup.string().required('Sex is required'),
    });

    const handleSubmit = (values) => {
        console.log(values);
        // Here you would handle the form submission, e.g., send data to your backend
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div>
                        <label htmlFor="firstName">Legal First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="div" />
                    </div>

                    <div>
                        <label htmlFor="lastName">Legal Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="div" />
                    </div>

                    <div>
                        <label htmlFor="dob">Date of Birth</label>
                        <Field name="dob" type="text" placeholder="dd/mm/yyyy" />
                        <ErrorMessage name="dob" component="div" />
                    </div>

                    <div>
                        <label htmlFor="sex">Sex</label>
                        <Field name="sex" as="select">
                            <option value="">Select...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="non-binary">Non-binary</option>
                        </Field>
                        <ErrorMessage name="sex" component="div" />
                    </div>

                    <div>
                        <label htmlFor="genderInfo">Add more sex & gender info (optional)</label>
                        <Field name="genderInfo" type="text" />
                    </div>

                    <button type="submit">Create Account</button>
                </Form>
            )}
        </Formik>
    );
};

export default SignupForm;
