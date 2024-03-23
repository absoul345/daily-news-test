import { Formik, Form, Field, ErrorMessage } from 'formik';

import { validateForm } from './create-articles-form.helpers';

import { useStateArticleForm } from './create-article-form.state';

import { INITIAL_VALUE } from '../../constants/common.constats';

const CreateNewsArticleForm = () => {
  const { handleSubmit, errorMessage } = useStateArticleForm();
  return (
    <div className="max-w-xl mx-auto">
      <Formik
        initialValues={INITIAL_VALUE}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-2">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Title*:
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="mt-1 h-3">
                <ErrorMessage
                  name="title"
                  component="div"
                  className=" text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="link"
                className="block text-gray-700 font-bold mb-2"
              >
                Link*:
              </label>
              <Field
                type="text"
                id="link"
                name="link"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="mt-1 h-3">
                <ErrorMessage
                  name="link"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="imageURL"
                className="block text-gray-700 font-bold mb-2"
              >
                Image URL*:
              </label>
              <Field
                type="text"
                id="imageURL"
                name="imageURL"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="mt-1 h-3">
                <ErrorMessage
                  name="imageURL"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="contentSnippet"
                className="block text-gray-700 font-bold mb-2"
              >
                Content Snippet*:
              </label>
              <Field
                as="textarea"
                id="contentSnippet"
                name="contentSnippet"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="mt-1 h-3">
                <ErrorMessage
                  name="contentSnippet"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="content"
                className="block text-gray-700 font-bold mb-2"
              >
                Content*:
              </label>
              <Field
                as="textarea"
                id="content"
                name="content"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="mt-1 h-3">
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <p className="mb-1 h-3 text-red-500 text-sm text-center">
              {errorMessage !== '' ? errorMessage : ''}
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateNewsArticleForm;
