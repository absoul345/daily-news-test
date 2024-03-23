import NavigationBar from '../../components/navigation-bar/navigation-bar';
import SearchBar from '../../components/search-bar/search-bar';
import Layout from '../../components/layout/layout';
import SortButton from '../../components/sort-buttons/sort-buttons';
import ArticlesCollection from '../../components/articles-collection/articles-collection';
import { ITEMS_PER_PAGE } from '../../constants/common.constats';
import Pagination from '../../components/pagination/pagination';
import { useArticleState } from '../../hooks/article-collection.hook';

const Home: React.FC = () => {
  const {
    setQuery,
    query,
    setActiveOption,
    chankedArticles,
    filteredArticles,
    currentPage,
    handlePageChange,
  } = useArticleState();

  return (
    <>
      <NavigationBar />
      <Layout>
        <div className="mb-20 flex flex-row items-center justify-center">
          <SearchBar setQuery={setQuery} query={query} />
          <SortButton setActiveOption={setActiveOption} />
        </div>
        <ArticlesCollection filteredArticles={chankedArticles} />
        {filteredArticles && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredArticles.length / ITEMS_PER_PAGE)}
            onPageChange={handlePageChange}
          />
        )}
      </Layout>
    </>
  );
};

export default Home;
