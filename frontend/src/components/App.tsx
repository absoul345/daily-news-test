import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home/home';
import Error from './error/error';
import Auth from '../pages/auth/auth';
import AdminPanel from '../pages/admin-panel/admin-panel';
import ProtectedRoute from '../utils/privat-route';
import CreateArticle from '../pages/create-article/create-article';
import ArticleUpdate from '../pages/article-update/article-update';
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
