import useLocalStorage from '@hooks/use-local-storage';
import { renderHook, act } from '@testing-library/react';

const KEY = 'query';
const INITIAL_VALUE = 'initial query';
const TEST_VALUE = 'test query';

describe('reducers', () => {
  it('should handle initial state', () => {
    const { result } = renderHook(() => useLocalStorage<string>(KEY, INITIAL_VALUE));
    expect(result.current[0]).toBe(INITIAL_VALUE);
  });

  it('should save query to LS', () => {
    const { result } = renderHook(() => useLocalStorage<string>(KEY, INITIAL_VALUE));
    expect(result.current[0]).toBe(INITIAL_VALUE);
    result.current[3](TEST_VALUE);
    expect(localStorage.getItem(KEY)).toBe(TEST_VALUE);
  });

  it('should set new query', () => {
    const { result } = renderHook(() => useLocalStorage<string>(KEY, INITIAL_VALUE));
    const [data, ..._methods] = result.current;
    expect(data).toBe(INITIAL_VALUE);
    act(() => {
      result.current[1](TEST_VALUE);
    });
    expect(result.current[0]).toBe(TEST_VALUE);
  });

  it('getting data from LS', () => {
    const { result } = renderHook(() => useLocalStorage<string>(KEY, INITIAL_VALUE));
    const [data, ..._methods] = result.current;
    expect(data).toBe(INITIAL_VALUE);
    act(() => {
      result.current[3](TEST_VALUE);
    });
    expect(result.current[2]()).toBe(TEST_VALUE);
  });
});
