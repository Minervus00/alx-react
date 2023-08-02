import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

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
