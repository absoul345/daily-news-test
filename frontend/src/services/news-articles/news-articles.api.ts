import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

import { BASE_URL, PATHS_URL } from '../../constants/paths-url.constants';
import * as types from './news-articles.constants';

import { TResponseArticles, TUpdatedArticle } from './news-articles.types';
import { IArticle } from '../../types/common.types';

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.admin?.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [types.TAG_TYPES],
  endpoints: (builder) => ({
    getArticles: builder.query<TResponseArticles, any>({
      query: () => `articles`,
      providesTags: [types.TAG_TYPES],
    }),
    addArticle: builder.mutation<IArticle, Partial<IArticle>>({
      query: (body) => ({
        url: PATHS_URL.ARTICLES,
        method: 'POST',
        body,
      }),
      invalidatesTags: [types.TAG_TYPES],
    }),
    updateArticle: builder.mutation<TUpdatedArticle, Partial<TUpdatedArticle>>({
      query: ({ _id, updatedData }) => ({
        url: `/${PATHS_URL.ARTICLES}/${_id}`,
        method: 'PATCH',
        body: updatedData,
      }),
      onQueryStarted({ _id, updatedData }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          newsApi.util.updateQueryData('getArticles', _id, (draft: any) => {
            Object.assign(draft, updatedData);
          })
        );
        queryFulfilled.catch(patchResult.undo);
      },
      invalidatesTags: [types.TAG_TYPES],
    }),
    deleteArticle: builder.mutation<{ success: boolean; id: string }, any>({
      query(id) {
        return {
          url: `/${PATHS_URL.ARTICLES}/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [types.TAG_TYPES],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetArticlesQuery,
  useAddArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = newsApi;
