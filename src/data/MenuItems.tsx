import {MenuItems} from '../interfaces/appInterfaces';

export const menuItems: MenuItems[] = [
  {
    name: 'Animation0101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation0202',
    icon: 'aperture-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alert',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Text Inputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull To Refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
];
