import { FormikValues } from 'formik';
import { IFormValues } from './update-article-form.types';

export const validateForm = (values: IFormValues) => {
  const errors: Partial<FormikValues> = {};
  if (
    !values.title &&
    !values.link &&
    !values.pubdate &&
    !values.imageURL &&
    !values.content &&
    !values.contentSnippet
  ) {
    errors.general = 'At least one field should be filled.';
    return errors;
  }

  if (values.title.length < 2 && values.title.length === 1) {
    errors.title = 'The title must contain at least 2 characters.';
  }
  if (values.link.length < 2 && values.link.length === 1) {
    errors.link = 'The link must contain at least 2 characters';
  }
  if (values.imageURL.length < 2 && values.imageURL.length === 1) {
    errors.imageURL = 'Image URL must contain at least 2 characters';
  }
  if (values.contentSnippet.length < 2 && values.contentSnippet.length === 1) {
    errors.contentSnippet =
      'Content snippet must contain at least 2 characters';
  }
  if (values.content.length < 2 && values.content.length === 1) {
    errors.content = 'Content must contain at least 2 characters';
  }
  if (values.pubdate!.length < 2 && values.pubdate!.length === 1) {
    errors.pubdate = 'Public date must contain at least 2 characters';
  }
  return errors;
};
