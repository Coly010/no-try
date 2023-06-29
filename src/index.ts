export type NoTryResult<T, E extends Error = Error> = [E, null] | [null, T];

function noop(): null {
  return null;
}

export function noTry<T, E extends Error = Error>(
  fn: () => T,
  handleErr: (error: E) => void = noop
): NoTryResult<T, E> {
  try {
    return [null, fn()];
  } catch (err) {
    handleErr(err as E);
    return [err as E, null];
  }
}

export async function noTryAsync<T, E extends Error = Error>(
  fn: () => Promise<T>,
  handleErr: (error: E) => void = noop
): Promise<NoTryResult<T, E>> {
  try {
    return [null, await fn()];
  } catch (err) {
    handleErr(err as E);
    return [err as E, null];
  }
}

export const useTry = noTry;
export const useTryAsync = noTryAsync;
