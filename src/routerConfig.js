import Home from './components/home/Home'
import Idea from './components/idea/Idea'
import Market from './components/market/Market'
import Notice from './components/notice/Notice'
import More from './components/more/More'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/idea',
    component: Idea
  },
  {
    path: '/market',
    component: Market
  },
  {
    path: '/notice',
    component: Notice
  },
  {
    path: '/more',
    component: More
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/home'
  }
]
