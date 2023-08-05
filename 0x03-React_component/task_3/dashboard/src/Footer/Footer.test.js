import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders without crashing', () => {
  expect(shallow(<Footer />)).toBeDefined();
});

it('renders at the very least the text "Copyright"', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('p').text().includes("Copyright")).toBe(true);
});
