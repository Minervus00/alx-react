import {shallow} from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

it('if isHeader is true, renders one cell with colspan = 2 when textSecondCell does not exist', () => {
  const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="stuff"/>);
  expect(wrapper.find('th').length).toBe(1);
  expect(wrapper.find('th').find('[colSpan="2"]').length).toBe(1);
});

it('if isHeader is true, renders two cells when textSecondCell exists', () => {
  const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Foo" textSecondCell="Bar" />);
  expect(wrapper.find('th').length).toBe(2);
});

it('if isHeader is false, renders two td within a tr element', () => {
  const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="stuff"/>);
  const trElem = wrapper.find('tr');
  expect(trElem.length).toBe(1);
  expect(trElem.find('td').length).toBe(2);
});
