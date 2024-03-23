import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import { useAddArticleMutation } from '../../services/news-articles/news-articles.api';

import { OPTIONS } from './create-articles-form.constants';
import { PATHS_URL } from '../../constants/paths-url.constants';

import { ErrorResponse } from '../../types/common.types';
import { IFormValues } from './create-article-form.types';

export const useStateArticleForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [addPost] = useAddArticleMutation();
  const navigate = useNavigate();

  const handleSubmit = async (
    values: IFormValues,
    { resetForm }: FormikHelpers<IFormValues>
  ) => {
    try {
      if (errorMessage) {
        setErrorMessage('');
      }

      const currentDate = new Date();
      const dateString = currentDate.toLocaleString('en-US', OPTIONS);
      values.pubdate = dateString;

      await addPost(values);

      resetForm();

      navigate(`/${PATHS_URL.ADMIN_PANEL}`);
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      setErrorMessage(errorResponse.data.data.message);
    }
  };

  return { handleSubmit, errorMessage };
};
