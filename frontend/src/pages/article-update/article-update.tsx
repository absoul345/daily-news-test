import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import UpdateArticleForm from '../../components/update-article-form/update-article-form';
import NavigationBar from '../../components/navigation-bar/navigation-bar';

const ArticleUpdate = () => {
  let { id } = useParams();
  return (
    <>
      <NavigationBar />
      <Layout>
        <h2 className="text-center text-2xl font-bold mb-4">
          Update Article Form
        </h2>
        <UpdateArticleForm id={id} />
      </Layout>
    </>
  );
};

export default ArticleUpdate;
