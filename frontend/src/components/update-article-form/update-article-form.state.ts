import { useNavigate } from 'react-router-dom';
import { useUpdateArticleMutation } from '../../services/news-articles/news-articles.api';
import { IFormValues } from './update-article-form.types';
import { FormikHelpers } from 'formik';
import { PATHS_URL } from '../../constants/paths-url.constants';

export const useUpdateArticleForm = (id: string | undefined) => {
  const [updateArticle] = useUpdateArticleMutation();
  const navigate = useNavigate();

  const onSubmit = async (
    values: IFormValues,
    { resetForm }: FormikHelpers<IFormValues>
  ) => {
    try {
      let nonEmptyValues: Partial<IFormValues> = {};
      const stringWithoutColon = id!.slice(1);

      for (const key in values) {
        if (values[key] !== '') {
          nonEmptyValues[key] = values[key];
        }
      }

      await updateArticle({
        _id: stringWithoutColon,
        updatedData: nonEmptyValues,
      });

      resetForm();

      navigate(`/${PATHS_URL.ADMIN_PANEL}`);
    } catch (error) {
      console.log('error', error);
    }
  };

  return { onSubmit };
};
