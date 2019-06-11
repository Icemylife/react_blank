import SettingsScreen from '../../components/screens/settings'
import AccountScreen from '../../components/screens/account'

/**
 * Routes list
 * @type {Array}
 */
const routes = [ // TODO: remove title after test
  {
    path: '/',
    component: SettingsScreen,
    title: 'SettingsScreen' // Note: for test nav
  },
  {
    path: '/settings',
    component: SettingsScreen,
    // private: true,
    title: 'SettingsScreen' // Note: for test nav
  },
  {
    path: '/account',
    component: AccountScreen,
    title: 'AccountScreen'
  }
]

export default routes
