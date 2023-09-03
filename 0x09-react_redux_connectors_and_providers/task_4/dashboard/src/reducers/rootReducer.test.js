import { Map } from 'immutable';
import { rootReducer } from './rootReducer';
import { combineReducers } from 'redux';

it('test the root reducer\'s initial state', () => {
  const reducer = combineReducers(rootReducer);
  const result = reducer(undefined, {type: "RANDOM"});
  for (const key in result) {
    expect(typeof result[key]).toEqual(typeof Map({}));
  }
});
