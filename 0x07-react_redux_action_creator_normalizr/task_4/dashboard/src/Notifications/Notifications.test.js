import { shallow } from 'enzyme';
import {jest} from '@jest/globals';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

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
  expect(wrapper.find('#menuItem').exists()).toBe(true);
});

it('div.Notifications is not being displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('#Notifications').exists()).toBe(false);
});

it('check that the menu item is being displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer={true}/>);
  expect(wrapper.find('#menuItem').exists()).toBe(true);
});

it('div.Notifications is being displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer={true}/>);
  expect(wrapper.find('#Notifications').exists()).toBe(true);
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

});

it('renders the correct message when listNotif is non empty', () => {
  const list = [
    {id: 1, type: 'default', value: 'New course available'}
  ];
  const wrapper = shallow(<Notifications listNotifications={list} displayDrawer={true}/>);
  expect(wrapper.find('p').text() === 'Here is the list of notifications').toBe(true);
});

it('markAsRead works correctly', () => {
  const mocked = jest.fn();
  const wrapper = shallow(<Notifications markNotificationAsRead={mocked}/>);
  const inst = wrapper.instance();
  inst.props.markNotificationAsRead(1);
  expect(mocked).toBeCalled();
  mocked.mockRestore();
});

it('doesn\'t render when updating with the same list', () => {
  const listNotif = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
  ];
  const wrapper = shallow(<Notifications listNotifications={listNotif}/>);
  const inst = wrapper.instance();
  const prevL = inst.props.listNotifications.length
  inst.setState({listNotifications: listNotif});
  expect(prevL === inst.props.listNotifications.length).toBe(true);
});

it('renders when updating with a list longer than current list', () => {
  const listNotif = [
    {id: 1, type: 'default', value: 'New course available'},
  ];
  const wrapper = shallow(<Notifications listNotifications={listNotif}/>);
  const inst = wrapper.instance();
  const prevL = inst.props.listNotifications.length
  listNotif.push({id: 2, type: 'urgent', value: 'New resume available'})
  inst.setState({listNotifications: listNotif});
  expect(prevL + 1 === inst.props.listNotifications.length).toBe(true);
});

it('clicking on the menu item calls handleDisplayDrawer', () => {
  const mocked = jest.fn();
  const wrapper = shallow(<Notifications handleDisplayDrawer={mocked}/>);
  wrapper.find('#menuItem').simulate("click");
  expect(mocked).toBeCalled();
  mocked.mockRestore();
});

it('clicking on the button calls handleHideDrawer', () => {
  const mocked = jest.fn();
  const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={mocked}/>);
  wrapper.find('button').simulate("click");
  expect(mocked).toBeCalled();
  mocked.mockRestore();
});
