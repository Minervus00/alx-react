import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe ('renders correctly when listNotifications is missing or empty ', () => {
  it('renders without listNotifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it('renders with empty listNotifications', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper).toBeDefined();
  });
});

it("renders ul", () => {
  const wrapper = shallow(<Notifications displayDrawer={true}/>);
  expect(wrapper.find("ul")).toBeDefined();
});

it('renders the text "No new notification for now"', () => {
  const wrapper = shallow(<Notifications displayDrawer={true}/>);
  const txt = wrapper.find('p');
  expect(txt.text() === 'No new notification for now').toBe(true);
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

describe('listNotifications is rendered correctly when non empty', () => {
  let wrapper;
  let list;

  beforeEach(() => {
    list = [
      {id: 1, type: 'default', value: 'New course available'}
    ];
    wrapper = shallow(<Notifications listNotifications={list} displayDrawer={true}/>);
  });

  it('renders the correct number of NotificationItem', () => {
    expect(wrapper.find(NotificationItem).length).toBe(1);
  });

  it('renders the correctly NotificationItem', () => {
    expect(wrapper.find(NotificationItem).first().html()).toBe('<li data-notification-type="default">New course available</li>');
  });
});

it('renders the correct message when listNotif is non empty', () => {
  const list = [
    {id: 1, type: 'default', value: 'New course available'}
  ];
  const wrapper = shallow(<Notifications listNotifications={list} displayDrawer={true}/>);
  expect(wrapper.find('p').text() === 'Here is the list of notifications').toBe(true);
});
