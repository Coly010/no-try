export type NoTryResult<T> = { result: T; error: Error };

export function noTry<T>(fn: () => T, handleErr: (error: Error) => void = error => null): NoTryResult<T> {
  const result: NoTryResult<T> = { result: null, error: null };
  try {
    result.result = fn();
  } catch (err) {
    result.error = err;
    handleErr(err);
  }
  return result;
}

export async function noTryAsync<T>(
  fn: () => Promise<T>,
  handleErr: (error: Error) => void = error => null
): Promise<NoTryResult<T>> {
  const result: NoTryResult<T> = { result: null, error: null };
  try {
    result.result = await fn();
  } catch (err) {
    result.error = err;
    handleErr(err);
  }
  return result;
}
