import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../services/admin/admin.api';
import { setCredentials } from '../../services/admin/admin.slice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const navigate = useNavigate();

  const validateForm = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = 'Enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Enter your password';
    }
    return errors;
  };

  const handleSubmit = async (values: any) => {
    try {
      if (errorMessage) {
        setErrorMessage('');
      }

      const admin = await login(values).unwrap();
      const { credentials } = admin.data;

      dispatch(setCredentials(credentials));
      navigate('/admin-panel');
    } catch (error: any) {
      console.log('error', error);
      setErrorMessage(error.data.data.message);
    }
  };
  return (
    <div className="flex items-center justify-center my-12">
      <div className="max-w-md w-full">
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-8">
              <div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  />
                  <div className="mt-1 h-8">
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  />
                  <div className="mt-1 h-8">
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
              </div>
              <p className="mb-5 h-5 text-red-500 text-sm text-center">
                {errorMessage !== '' ? errorMessage : ''}
              </p>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="group relative w-32 flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  disabled={isSubmitting}
                >
                  Entry
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
