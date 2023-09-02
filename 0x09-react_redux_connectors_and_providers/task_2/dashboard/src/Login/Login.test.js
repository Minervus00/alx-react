/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

it('renders without crashing', () => {
  expect(shallow(<Login />)).toBeDefined();
});

it('the submit button is disabled by default', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input').last().props().disabled).toBe(true);
});

it('after changing the value of the two inputs, the button is enabled', () => {
  const wrapper = shallow(<Login />);
  wrapper.find('input').at(0).simulate('change', {target: {names: 'email', value: "semper@fi.com"}});
  wrapper.find('input').at(1).simulate('change', {target: {names: 'password', value: "hOurAA*Charlie"}});
  expect(wrapper.find('input').last().props().disabled).toBe(false);
});
