import { shallow } from 'enzyme';
import { App } from './App';
import Notifications from '../Notifications/Notifications';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { mapStateToProps } from './App';
import { uiReducer } from '../reducers/uiReducer';

StyleSheetTestUtils.suppressStyleInjection();

it('renders without crashing', () => {
  expect(shallow(<App />)).toBeDefined();
});

it('Contains Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Notifications).exists()).toBe(true);
});

it('Checks that CourseList is not displayed', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("CourseList").exists()).toBe(false);
});

it('displayDrawer default value is false', () => {
  const wrapp = shallow(<App />);
  const inst = wrapp.instance();
  expect(inst.props.displayDrawer).toBe(false);
});

it('mapStateToProps returns the right object', () => {
  let state = {
    ui: fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true
    }),
  };

  const expected = {
    isLoggedIn: true,
    displayDrawer: true
  };
  expect(mapStateToProps(state)).toEqual(expected);
});
