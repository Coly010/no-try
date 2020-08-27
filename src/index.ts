export type NoTryTupleResult<T> = [Error, T];

export function noTry<T>(fn: () => T): NoTryTupleResult<T> {
  const result: NoTryTupleResult<T> = [null, null];
  try {
    result[1] = fn();
  } catch (err) {
    result[0] = err;
  }
  return result;
}

export async function noTryAsync<T>(fn: () => Promise<T>): Promise<NoTryTupleResult<T>> {
  const result: NoTryTupleResult<T> = [null, null];
  try {
    result[1] = await fn();
  } catch (err) {
    result[0] = err;
  }
  return result;
}
