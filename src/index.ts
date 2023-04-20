export type NoTryResult<T, E = Error> = [E | null, T | null];

function noop(): void {
  return null;
}

export function noTry<T, E = Error>(
  fn: () => T,
  handleErr: (error: E) => void = noop
): NoTryResult<T, E> {
  const result: NoTryResult<T, E> = [null, null];
  try {
    result[1] = fn();
  } catch (err) {
    result[0] = err;
    handleErr(err);
  }
  return result;
}

export async function noTryAsync<T, E = Error>(
  fn: () => Promise<T>,
  handleErr: (error: E) => void = noop
): Promise<NoTryResult<T, E>> {
  const result: NoTryResult<T, E> = [null, null];
  try {
    result[1] = await fn();
  } catch (err) {
    result[0] = err;
    handleErr(err);
  }
  return result;
}

export const useTry = noTry;
export const useTryAsync = noTryAsync;
