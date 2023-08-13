/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme';
import {jest} from '@jest/globals';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

it('renders without crashing', () => {
  expect(shallow(<App />)).toBeDefined();
});

it('Contains Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Notifications).exists()).toBe(true);
});

it('Contains Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Header />)).toBe(true);
});

it('Contains Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Footer />)).toBe(true);
});

it('Checks that CourseList is not displayed', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<CourseList />)).toBe(false);
});

it('renders alert correctly when the keys control and h are pressed', () => {
  const wrapper = shallow(<App />);

  window.alert = jest.fn();
  const alert = jest.spyOn(window, 'alert');
  const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
  document.dispatchEvent(event);
  expect(alert).toBeCalledWith("Logging you out");
  alert.mockRestore();
});

it('state correctly updated when the keys control and h are pressed', () => {
  const inst = shallow(<App />).instance();
  const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
  document.dispatchEvent(event);
  expect(inst.state.user.email).toBe('');
  expect(inst.state.user.password).toBe('');
  expect(inst.state.user.isLoggedIn).toBe(false);
});

it('displayDrawer default value is false', () => {
  const wrapp = shallow(<App />);
  const inst = wrapp.instance();
  expect(inst.state.displayDrawer).toBe(false);
});

it('handleDisplayDrawer changes displayDrawer value to true', () => {
  const wrapp = shallow(<App />);
  const inst = wrapp.instance();
  inst.handleDisplayDrawer();
  expect(inst.state.displayDrawer).toBe(true);
});

it('handleHideDrawer changes displayDrawer value to false', () => {
  const wrapp = shallow(<App />);
  const inst = wrapp.instance();
  inst.handleDisplayDrawer();
  inst.handleHideDrawer();
  expect(inst.state.displayDrawer).toBe(false);
});

it('logIn function updates the state correctly', () => {
  const wrapp = shallow(<App />);
  const inst = wrapp.instance();
  inst.logIn('Semper', 'Fidelis');
  expect(inst.state.user.email).toBe('Semper');
  expect(inst.state.user.password).toBe('Fidelis');
  expect(inst.state.user.isLoggedIn).toBe(true);
});

it('logOut function updates the state correctly', () => {
  const wrapp = shallow(<App />);
  const inst = wrapp.instance();
  inst.logIn('Semper', 'Fidelis');
  inst.logOut();
  expect(inst.state.user.email).toBe('');
  expect(inst.state.user.password).toBe('');
  expect(inst.state.user.isLoggedIn).toBe(false);
});
