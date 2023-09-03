import { shallow } from 'enzyme';
import { Footer } from './Footer';

it('renders without crashing', () => {
  expect(shallow(<Footer />)).toBeDefined();
});

it('renders at the very least the text "Copyright"', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('p').text().includes("Copyright")).toBe(true);
});

it('link is not displayed when the user is logged out within the context', () => {
  const user= {email:'', password: '', isLoggedIn: false};
  const wrapper = shallow(<Footer user={user}/>);
  expect(wrapper.find('p').length).toBe(1);
});

it('link is displayed when the user is logged in within the context', () => {
  const user = {email:'', password: '', isLoggedIn: true};
  const wrapper = shallow(<Footer user={user}/>);
  expect(wrapper.find('p').length).toBe(2);
});
