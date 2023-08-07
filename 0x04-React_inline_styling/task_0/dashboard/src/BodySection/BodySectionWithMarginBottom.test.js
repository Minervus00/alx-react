import { shallow } from 'enzyme';
import {jest} from '@jest/globals';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

it('BodySectionWithMarginBottom renders correctly', () => {
  const wrapper = shallow(
    <BodySectionWithMarginBottom title="test title">
      <p>test children node</p>
    </BodySectionWithMarginBottom>
  );
  const bsElm = wrapper.find(BodySection);
  expect(bsElm.exists()).toBe(true);
  expect(bsElm.props === wrapper.props).toBe(true);
});
