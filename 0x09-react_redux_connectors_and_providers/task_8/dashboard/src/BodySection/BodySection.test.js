import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

it('BodySection renders correctly', () => {
  const wrapper = shallow(
    <BodySection title="test title">
      <p>test children node</p>
    </BodySection>
  );
  const h2Elm = wrapper.find('h2');
  const pElm = wrapper.find('p');
  expect(h2Elm.exists() && pElm.exists()).toBe(true);
  expect(h2Elm.text()).toBe('test title');
});


