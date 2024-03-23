import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectIsAuthenticated } from '../../services/admin/admin.slice';

import { useDeleteArticleMutation } from '../../services/news-articles/news-articles.api';

import { DeleteIcon, EditIcon } from '../../assets/svg.assets';

import { PATHS_URL } from '../../constants/paths-url.constants';

import { IArticle } from '../../types/common.types';

type TProp = {
  article: IArticle;
};

const ArticleMarkUp: React.FC<TProp> = ({ article }) => {
  const [deleteArticle] = useDeleteArticleMutation();

  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleUpdate = (id: string | undefined) => {
    navigate(`/${PATHS_URL.UPDATE_ARTICLE}/:${id}`);
  };

  const handleDelete = async (id: string | undefined) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure')) {
      await deleteArticle(id);
    } else {
      ///Nothing
    }
  };

  return (
    <li className="relative h-full rounded shadow-lg">
      <ul className="flex flex-col h-full flex-shrink flex-grow justify-between">
        <li>
          <img src={article.imageURL} alt="Article" className="w-full" />
          <div className="mt-8 px-4">
            <p className="font-bold text-xl mb-2">{article.title}</p>
            <p className="text-gray-700 text-base">{article.contentSnippet}</p>
          </div>
        </li>
        <li className="mb-8 px-4">
          <a
            href={article.link}
            className="mb-5 inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
          >
            Read More
          </a>
          <p className="text-gray-700 text-base">{article.pubdate}</p>
          {isAuthenticated && (
            <>
              <div className="flex space-x-2 absolute bottom-1 left-2">
                <button
                  onClick={() => handleUpdate(article._id)}
                  className="text-gray-700 bg-transparent border-none cursor-pointer"
                  aria-label="Update article"
                >
                  <EditIcon />
                </button>
              </div>
              <div className="flex space-x-2 absolute bottom-1 right-2">
                <button
                  onClick={() => handleDelete(article._id)}
                  className="text-gray-700 bg-transparent border-none cursor-pointer"
                  aria-label="Delete article"
                >
                  <DeleteIcon />
                </button>
              </div>
            </>
          )}
        </li>
      </ul>
    </li>
  );
};

export default ArticleMarkUp;
