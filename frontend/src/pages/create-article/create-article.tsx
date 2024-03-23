import CreateNewsArticleForm from '../../components/create-article-form/create-article-form';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import Layout from '../../components/layout/layout';

const CreateArticle = () => {
  return (
    <>
      <NavigationBar />
      <Layout>
        <h2 className="text-center text-2xl font-bold mb-4">Article Form</h2>
        <CreateNewsArticleForm />
      </Layout>
    </>
  );
};

export default CreateArticle;
