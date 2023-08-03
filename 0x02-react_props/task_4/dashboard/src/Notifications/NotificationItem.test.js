import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";

it('basic rendering works', () => {
  expect(shallow(<NotificationItem />)).toBeDefined();
});

it('passing type and value renders the correct html', () => {
  const wrapper = shallow(<NotificationItem type="default" value="test" />);
  expect(wrapper.contains(<li data-notification-type="default">test</li>)).toBe(true);
});

it('passing html renders the correct html', () => {
  const wrapper = shallow(<NotificationItem html={{__html: '<u>test</u>'}} />);
  expect(wrapper.find('li').html()).toBe('<li data-notification-type="urgent"><u>test</u></li>');
});
