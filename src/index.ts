export type NoTryResult<T, E = Error> = [E | undefined, T | undefined];

function noop(): void {
  return undefined;
}

export function noTry<T, E = Error>(fn: () => T, handleErr: (error: E) => void = noop): NoTryResult<T, E> {
  const result: NoTryResult<T, E> = [undefined, undefined];
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
  handleErr: (error: E) => void = noop,
): Promise<NoTryResult<T, E>> {
  const result: NoTryResult<T, E> = [undefined, undefined];
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
