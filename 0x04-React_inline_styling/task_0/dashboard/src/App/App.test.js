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

it('Contains Login component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Login />)).toBe(true);
});

it('Contains Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Footer />)).toBe(true);
});

it('Checks that CourseList is not displayed', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<CourseList />)).toBe(false);
});

describe('isLoggedIn is true', () => {
  it('Login component is not included', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it('CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });
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

it('calls correctly logOut function when the keys control and h are pressed', () => {
  const mocked = jest.fn();
  const wrapper = shallow(<App logOut={mocked}/>);

  const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
  document.dispatchEvent(event);
  expect(mocked).toBeCalled();
  mocked.mockRestore();
});
