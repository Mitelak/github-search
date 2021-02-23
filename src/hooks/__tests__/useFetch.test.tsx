import { renderHook, act } from '@testing-library/react-hooks';
import { mockFetch } from 'utils';
import useFetch from '../useFetch';

const SUCCESS_RESPONSE = 'TEST_RESPONSE';

describe('useFetch', () => {
  beforeEach(() =>
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => mockFetch(SUCCESS_RESPONSE))
  );
  test('should make call on render when default options provided', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('/test-url')
    );

    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.data).toBe(SUCCESS_RESPONSE);
    expect(result.current.isLoading).toBe(false);
  });

  test("shouldn't make call when enabled is false", async () => {
    const { result } = renderHook(() =>
      useFetch('/test-url', { enabled: false })
    );

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
  });

  test('should make call when fetcher used', async () => {
    const { result } = renderHook(() =>
      useFetch('/test-url', { enabled: false })
    );

    expect(result.current.data).toBe(null);
    await act(async () => result.current.fetcher());
    expect(result.current.data).toBe(SUCCESS_RESPONSE);
  });

  test('should return error when fetch fails', async () => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementationOnce(() => Promise.reject(new Error('FAILURE')));
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('/test-url')
    );

    await waitForNextUpdate();
    expect(result.current.error).toBe('FAILURE');
  });

  test('should clean previous error when success', async () => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementationOnce(() => Promise.reject(new Error('FAILURE')));
    const { result, waitForNextUpdate, rerender } = renderHook(
      (props) => useFetch(props),
      { initialProps: '/failure-url' }
    );

    await waitForNextUpdate();
    expect(result.current.error).toBe('FAILURE');

    jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetch({}));

    rerender('/success-url');
    await waitForNextUpdate();
    expect(result.current.error).toBe(null);
  });
});
