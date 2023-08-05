import { shallow } from 'enzyme';
import {jest} from '@jest/globals';
import NotificationItem from "./NotificationItem";

it('basic rendering works', () => {
  expect(shallow(<NotificationItem />)).toBeDefined();
});

it('passing html renders the correct html', () => {
  const wrapper = shallow(<NotificationItem html={{__html: '<u>test</u>'}} />);
  expect(wrapper.find('li').html()).toBe('<li data-notification-type="urgent"><u>test</u></li>');
});

it('markAsRead works correctly', () => {
  const mocked = jest.fn();
  const wrapper = shallow(<NotificationItem markAsRead={mocked} id={1} type={'default'} value={'New course available'}/>);
  wrapper.find('li').simulate("click");
  expect(mocked).toBeCalled();
  mocked.mockRestore();
});
