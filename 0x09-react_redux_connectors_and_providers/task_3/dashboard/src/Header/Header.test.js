/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme';
import { Header } from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


it('renders without crashing', () => {
  expect(shallow(<Header />)).toBeDefined();
});

it('logoutSection is not created', () => {
  const user = {email: '', password:'', isLoggedIn: false};
  const wrapper = shallow(<Header user={user}/>);
  expect(wrapper.find("#logoutSection").exists()).toBe(false);
});

it('logoutSection is created', () => {
  const user = {email: '', password:'', isLoggedIn: true};
  const wrapper = shallow(<Header user={user}/>);
  expect(wrapper.find("#logoutSection").exists()).toBe(true);
});
