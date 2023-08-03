import { shallow } from 'enzyme';
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
  expect(wrapper.contains(<Notifications />)).toBe(true);
});

it('Contains Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Header />)).toBe(true);
});

it('Contains Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Login />)).toBe(true);
});

it('Contains Notifications component', () => {
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
    expect(wrapper.contains(<CourseList />)).toBe(true);
  });
});
