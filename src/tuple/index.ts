export type NoTryTupleResult<T> = [T, Error];

export function noTry<T>(fn: () => T, handleErr: (error: Error) => void = error => null): NoTryTupleResult<T> {
  const result: NoTryTupleResult<T> = [null, null];
  try {
    result[0] = fn();
  } catch (err) {
    result[1] = err;
    handleErr(err);
  }
  return result;
}

export async function noTryAsync<T>(
  fn: () => Promise<T>,
  handleErr: (error: Error) => void = error => null
): Promise<NoTryTupleResult<T>> {
  const result: NoTryTupleResult<T> = [null, null];
  try {
    result[0] = await fn();
  } catch (err) {
    result[1] = err;
    handleErr(err);
  }
  return result;
}
