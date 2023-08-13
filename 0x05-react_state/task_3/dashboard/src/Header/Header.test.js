/**
 * @jest-environment jsdom
 */
import { shallow, render } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import jest from '@jest/globals';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


it('renders without crashing', () => {
  const context = {
    user: {email: '', password:'', isLoggedIn: false},
    logOut: () => {}
  };
  expect(shallow(<AppContext.Provider value={context}>
    <Header />
  </AppContext.Provider>)).toBeDefined();
});

it('logoutSection is not created', () => {
  const context = {
    user: {email: '', password:'', isLoggedIn: false},
    logOut: () => {}
  };
  const wrapper = shallow(
    <AppContext.Provider value={context}>
      <Header />
    </AppContext.Provider>
  );

  expect(wrapper.find("#logoutSection").exists()).toBe(false);
});

// it('logoutSection is created', () => {
//   const context = {
//     user: {email: 'Bobby', password:'Ryan', isLoggedIn: true},
//     logOut: () => {},
//   };
//   const wrapper = mount(
//     <AppContext.Provider value={context}>
//       <Header />
//     </AppContext.Provider>
//   );
//   expect(wrapper.find("#logoutSection").exists()).toBe(true);
//   wrapper.unmount();
// });

// it('logOut function is called', () => {
//   const mocked = jest.fn();
//   const context = {
//     user: {email: 'Bobby', password:'Ryan', isLoggedIn: true},
//     logOut: mocked,
//   };
//   const wrapper = mount(
//     <AppContext.Provider value={context}>
//       <Header />
//     </AppContext.Provider>
//   );
//   wrapper.find("a")simulate("click");
//   expect(mocked).toBeCalled();
// });
