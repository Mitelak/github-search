/*
 * Test utility.
 * In typical cases, it could be done using some mocking library.
 * `any` is just to make it works without the need of overriding the full Response object.
 */
export const mockFetch = (data: unknown): Promise<any> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(data),
      });
    }, 100)
  );
