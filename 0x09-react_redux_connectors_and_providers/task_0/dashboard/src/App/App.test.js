import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

it('mapStateToProps returns the right object', () => {
  let state = fromJS({
    isUserLoggedIn: true
  });
  expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
});
