import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

it('renders without crashing', () => {
  expect(shallow(<Header />)).toBeDefined();
});

it('renders img and h1 tags', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img').exists()).toBe(true);
  expect(wrapper.find('h1').exists()).toBe(true);
});
