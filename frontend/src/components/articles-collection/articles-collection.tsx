import { Suspense } from 'react';

import ArticleMarkUp from './article-murkup';

import { IArticle } from '../../types/common.types';

interface IProp {
  filteredArticles: IArticle[] | null;
}

const ArticlesCollection: React.FC<IProp> = ({ filteredArticles }) => {
  return (
    <Suspense fallback={<p>Loading.....</p>}>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {filteredArticles?.map((article: any) => (
          <ul
            key={article._id}
            className="border w-25 px-7 h-[35rem] sm:h-[35rem] sm:px-28 md:px-5 lg:px-0 lg:h-128 border-gray-300"
          >
            <ArticleMarkUp article={article} />
          </ul>
        ))}
      </div>
    </Suspense>
  );
};

export default ArticlesCollection;
