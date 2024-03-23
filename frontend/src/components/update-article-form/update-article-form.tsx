import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useUpdateArticleForm } from './update-article-form.state';

import { validateForm } from './update-article-form.helpers';

import { INITIAL_VALUE } from './update-article-form.constants';

import { IFormValues, IProp } from './update-article-form.types';

const UpdateArticleForm: React.FC<IProp> = ({ id }) => {
  const { onSubmit } = useUpdateArticleForm(id);

  return (
    <Formik
      initialValues={INITIAL_VALUE}
      validate={validateForm}
      onSubmit={onSubmit}
    >
      {({ errors }: { errors: Partial<IFormValues> }) => (
        <Form className="w-full max-w-lg mx-auto">
          {errors.general && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {errors.general}
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <Field
              type="text"
              id="title"
              placeholder="Optional"
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="mt-1 h-3">
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="link"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Link
            </label>
            <Field
              type="text"
              id="link"
              placeholder="Optional"
              name="link"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="mt-1 h-3">
              <ErrorMessage
                name="link"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="pubdate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Public Date
            </label>
            <Field
              type="text"
              id="pubdate"
              placeholder="Optional"
              name="pubdate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="mt-1 h-3">
              <ErrorMessage
                name="pubdate"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageURL"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Image URL
            </label>
            <Field
              type="text"
              id="imageURL"
              placeholder="Optional"
              name="imageURL"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="mt-1 h-3">
              <ErrorMessage
                name="imageURL"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Content
            </label>
            <Field
              as="textarea"
              type="text"
              id="content"
              placeholder="Optional"
              name="content"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="mt-1 h-3">
              <ErrorMessage
                name="content"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="contentSnippet"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Content Snippet
            </label>
            <Field
              as="textarea"
              type="text"
              id="contentSnippet"
              placeholder="Optional"
              name="contentSnippet"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="mt-1 h-3">
              <ErrorMessage
                name="contentSnippet"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Article
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateArticleForm;
