import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

it('renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper).toBeDefined();
});

it("renders ul", () => {
  const wrapper = shallow(<Notifications displayDrawer={true}/>);
  expect(wrapper.find("ul")).toBeDefined();
});

it('renders NotificationItem components', () => {
  const wrapper = shallow(<Notifications displayDrawer={true}/>);
  expect(wrapper.find(NotificationItem).exists()).toBe(true);
});

it('renders the text "Here is the list of notifications"', () => {
  const wrapper = shallow(<Notifications displayDrawer={true}/>);
  expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
});

it('renders NotificationItem components', () => {
  const wrapper = shallow(<Notifications displayDrawer={true}/>);
  expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default">New course available</li>');
});

it('check that the menu item is being displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('div.menuItem').exists()).toBe(true);
});

it('div.Notifications is not being displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('div.Notifications').exists()).toBe(false);
});

it('check that the menu item is being displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer={true}/>);
  expect(wrapper.find('div.menuItem').exists()).toBe(true);
});

it('div.Notifications is being displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer={true}/>);
  expect(wrapper.find('div.Notifications').exists()).toBe(true);
});
