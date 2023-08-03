import {shallow} from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

it('renders CourseList without crashing', () => {
  expect(shallow(<CourseList />)).toBeDefined();
});

it('renders 5 different rows', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.find(CourseListRow).length).toBe(5);
});
