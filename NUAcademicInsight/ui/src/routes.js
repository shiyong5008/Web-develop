import ReviewList from './ReviewList.jsx';
import ReviewEdit from './ReviewEdit.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';

import Profile from './Profile.jsx';

const routes = [
  { path: '/reviews/:id?', component: ReviewList },
  { path: '/edit/:id', component: ReviewEdit },
  // { path: '/report', component: IssueReport },
  { path: '/about', component: About },
  // { path: '/login', component: LogIn },
  // { path: '/signup', component: SignUp },
  // { path: '/addBlog', component: BlogAdd },
  // { path: '/blogs/:id?', component: BlogList },
  // { path: '/profile', component: Profile },

  { path: '*', component: NotFound },
];

export default routes;
