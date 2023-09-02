import { shallow } from 'enzyme';
import {jest} from '@jest/globals';
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

it('basic rendering works', () => {
  expect(shallow(<NotificationItem />)).toBeDefined();
});

// it('passing html renders the correct html', () => {
//   const wrapper = shallow(<NotificationItem type="urgent" html={{__html: '<u>test</u>'}} />);
//   expect(wrapper.find('li').html()).toMatch('<li data-notification-type="urgent" class="urgentColor_137u7ef"><u>test</u></li>');
// });

it('markAsRead works correctly', () => {
  const mocked = jest.fn();
  const wrapper = shallow(<NotificationItem markAsRead={mocked} id={1} type={'default'} value={'New course available'}/>);
  wrapper.find('li').simulate("click");
  expect(mocked).toBeCalled();
  mocked.mockRestore();
});
