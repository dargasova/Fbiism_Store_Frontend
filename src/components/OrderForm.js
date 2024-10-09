// src/components/OrderForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@mui/material';

const OrderForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', address: '' }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ handleChange }) => (
        <Form>
          <Field
            name="name"
            as={TextField}
            label="Name"
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Field
            name="email"
            as={TextField}
            label="Email"
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Field
            name="address"
            as={TextField}
            label="Address"
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Order
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
