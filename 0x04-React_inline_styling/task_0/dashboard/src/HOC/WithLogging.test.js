import {shallow} from 'enzyme';
import {jest} from '@jest/globals';
import WithLogging from './WithLogging';
import Login from '../Login/Login';


it('console.log was called on mount and on unmount when the wrapped element is pure html', () => {
  console.log = jest.fn();
  const logM = jest.spyOn(console, 'log');
  const Compo = WithLogging(() => <p></p>);
  const wrapper = shallow(<Compo />);
  expect(logM).toBeCalledTimes(1);
  wrapper.unmount();
  expect(logM).toBeCalledTimes(2);
  logM.mockRestore();
});

it('console.log was called on mount and on unmount with the correct message', () => {
  console.log = jest.fn();
  const logM = jest.spyOn(console, 'log');
  const Compo = WithLogging(() => <p></p>);
  const wrapper = shallow(<Compo />);
  expect(logM).toBeCalledWith("Component Component is mounted");
  wrapper.unmount();
  expect(logM).toBeCalledWith("Component Component is going to unmount");
  logM.mockRestore();
});

it('console.log was called on mount and on unmount with the correct message', () => {
  console.log = jest.fn();
  const logM = jest.spyOn(console, 'log');
  const Compo = WithLogging(Login);
  const wrapper = shallow(<Compo />);
  expect(logM).toBeCalledWith("Component Login is mounted");
  wrapper.unmount();
  expect(logM).toBeCalledWith("Component Login is going to unmount");
  logM.mockRestore();
});
