import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

it('renders without crashing', () => {
  expect(shallow(<Login />)).toBeDefined();
});

it('renders 2 input tags and 2 label tags', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input').length).toBe(2);
  expect(wrapper.find('label').length).toBe(2);
});
