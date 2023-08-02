import { shallow } from 'enzyme';
import Notifications from './Notifications';

it('renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper).toBeDefined();
});

it("renders ul", () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find("ul")).toBeDefined();
});

it('renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li').length).toBe(3);
});

it('renders the text Here is the list of notifications', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
});


