import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

it('renders CourseList without crashing', () => {
  expect(shallow(<CourseList />)).toBeDefined();
});

it('renders CourseList without crashing', () => {
  expect(shallow(<CourseList listCourses={[]}/>)).toBeDefined();
});

it('renders correctly when list of courses is passed', () => {
  const list = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
  ];
  const wrapper = shallow(<CourseList listCourses={list}/>);
  expect(wrapper.find(CourseListRow).length).toBe(4);
});

it('select_course action correctly dispatched', () => {
  const expected = {type: 'SELECT_COURSE', id: '1'};
  const wrapper = shallow(<CourseList />).instance();
  expect(wrapper.onChangeRow('1', true)).toBe(expected);
});

it('unselect_course action correctly dispatched', () => {
  const expected = {type: 'UNSELECT_COURSE', id: '1'};
  const wrapper = shallow(<CourseList />).instance();
  expect(wrapper.onChangeRow('1', false)).toBe(expected);
});
