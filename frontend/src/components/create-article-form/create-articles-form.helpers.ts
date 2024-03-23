import { FormikValues } from 'formik';

import { IFormValues } from './create-article-form.types';

export const validateForm = (values: IFormValues): Partial<FormikValues> => {
  const errors: Partial<FormikValues> = {};

  if (!values.title || values.title.length < 2) {
    errors.title = 'The title must contain at least 2 characters.';
  }
  if (!values.link || values.link.length < 2) {
    errors.link = 'The link must contain at least 2 characters';
  }
  if (!values.imageURL || values.imageURL.length < 2) {
    errors.imageURL = 'Image URL must contain at least 2 characters';
  }
  if (!values.contentSnippet || values.contentSnippet.length < 2) {
    errors.contentSnippet =
      'Content snippet must contain at least 2 characters';
  }
  if (!values.content || values.content.length < 2) {
    errors.content = 'Content must contain at least 2 characters';
  }
  return errors;
};
