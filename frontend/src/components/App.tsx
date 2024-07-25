import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home/home';
import AdminPanel from '../pages/admin-panel/admin-panel';
import Error from '../pages/error/error';
import Auth from '../pages/auth/auth';

import CreateArticle from '../pages/create-article/create-article';
import ArticleUpdate from '../pages/article-update/article-update';

import ProtectedRoute from '../utils/privat-route';

import { PATHS_URL } from '../constants/paths-url.constants';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${PATHS_URL.AUTH}`} element={<Auth />} />
        <Route element={<ProtectedRoute />}>
          <Route path={`/${PATHS_URL.ADMIN_PANEL}`} element={<AdminPanel />} />
          <Route
            path={`/${PATHS_URL.CREATE_ARTICLE}`}
            element={<CreateArticle />}
          />
          <Route
            path={`/${PATHS_URL.UPDATE_ARTICLE}/:id`}
            element={<ArticleUpdate />}
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
