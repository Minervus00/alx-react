import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

it('mapStateToProps returns the right object', () => {
  let state = fromJS({
    isUserLoggedIn: true,
    isNotificationDrawerVisible: true
  });
  const expected = {
    isLoggedIn: true,
    displayDrawer: true
  };
  expect(mapStateToProps(state)).toEqual(expected);
});
