import { useEffect, useState } from 'react';

import { ITEMS_PER_PAGE, SORT_OPTION } from '../constants/common.constats';

import { useGetArticlesQuery } from '../services/news-articles/news-articles.api';

import { IArticle } from '../types/common.types';

export const useArticleState = () => {
  const [filteredArticles, setFilteredArticles] = useState<IArticle[] | null>(
    null
  );
  const [chankedArticles, setChankedArticles] = useState<IArticle[] | null>(
    null
  );
  const [query, setQuery] = useState<string>('');
  const [activeOption, setActiveOption] = useState<string>(
    SORT_OPTION.PublicationDate
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading } = useGetArticlesQuery({});

  useEffect(() => {
    if (!isLoading && data?.data?.articles) {
      filterArticles();
    }
  }, [query, isLoading, activeOption, data]);

  useEffect(() => {
    if (filteredArticles) {
      chankArticles();
    }
  }, [query, filteredArticles, activeOption, currentPage]);

  const filterArticles = (): void => {
    let sortedArticles: IArticle[] | null = null;

    const results = data!.data.articles.filter((article: IArticle) =>
      article.title.toLowerCase().trim().includes(query.toLowerCase().trim())
    );

    if (activeOption === SORT_OPTION.PublicationDate) {
      sortedArticles = sortArticlesByDate(results);
    }

    if (activeOption === SORT_OPTION.Alphabetically) {
      sortedArticles = sortArticlesByTitle(results);
    }

    if (sortedArticles) {
      setFilteredArticles(sortedArticles);

      setCurrentPage(1);
    }
  };

  const sortArticlesByDate = (results: IArticle[]): IArticle[] => {
    return results.sort((a: IArticle, b: IArticle) => {
      return new Date(b.pubdate).getTime() - new Date(a.pubdate).getTime();
    });
  };

  const sortArticlesByTitle = (results: IArticle[]): IArticle[] => {
    return results.sort((a: IArticle, b: IArticle) => {
      return a.title.localeCompare(b.title);
    });
  };

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const chankArticles = () => {
    if (filteredArticles!.length <= 8) {
      setChankedArticles(filteredArticles);
      return;
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setChankedArticles(filteredArticles!.slice(startIndex, endIndex));
  };

  return {
    setQuery,
    query,
    setActiveOption,
    chankedArticles,
    filteredArticles,
    currentPage,
    handlePageChange,
  };
};
