import { Suspense } from 'react';

import ArticleMarkUp from './article-murkup';

import { IArticle } from '../../types/common.types';

interface IProp {
  filteredArticles: IArticle[] | null;
}

const ArticlesCollection: React.FC<IProp> = ({ filteredArticles }) => {
  return (
    <Suspense fallback={<p>Loading.....</p>}>
      <div className="grid grid-cols-4 gap-10">
        {filteredArticles?.map((article: any) => (
          <ul key={article._id} className="border h-128 border-gray-300">
            <ArticleMarkUp article={article} />
          </ul>
        ))}
      </div>
    </Suspense>
  );
};

export default ArticlesCollection;
