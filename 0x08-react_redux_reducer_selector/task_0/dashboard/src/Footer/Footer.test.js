import { shallow, mount, unmount } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

it('renders without crashing', () => {
  expect(shallow(
    <AppContext.Provider>
      <Footer />
    </AppContext.Provider>
  )).toBeDefined();
});

it('renders at the very least the text "Copyright"', () => {
  const context = {
    user: {email:'', password: '', isLoggedIn: false},
    logOut: () => {},
  };
  const wrapper = shallow(
    <AppContext.Provider value={context}>
      <Footer />
    </AppContext.Provider>
  );
  expect(wrapper.dive().find('p').text().includes("Copyright")).toBe(true);
});

it('link is not displayed when the user is logged out within the context', () => {
  const context = {
    user: {email:'', password: '', isLoggedIn: false},
    logOut: () => {},
  };
  const wrapper = shallow(
    <AppContext.Provider value={context}>
      <Footer />
    </AppContext.Provider>
  );
  expect(wrapper.dive().find('p').length).toBe(1);
});

// it('link is displayed when the user is logged in within the context', () => {
//   const context = {
//     user: {email:'', password: '', isLoggedIn: true},
//     logOut: () => {},
//   };
//   const wrapper = shallow(
//     <AppContext.Provider value={context}>
//       <Footer />
//     </AppContext.Provider>
//   );
//   expect(wrapper.dive().find('p').length).toBe(2);
// });
