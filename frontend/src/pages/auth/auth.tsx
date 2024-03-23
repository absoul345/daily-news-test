import LoginForm from '../../components/login-form/login-form';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import Layout from '../../components/layout/layout';

const Auth = () => {
  return (
    <>
      <NavigationBar />
      <Layout>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Login
        </h2>
        <LoginForm />
      </Layout>
    </>
  );
};

export default Auth;
