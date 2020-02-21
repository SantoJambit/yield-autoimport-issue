import { call } from 'redux-saga/effects';

export function* test() {
    const token = yield select(() => 0);
    yield call((a: string) => a, '');
}
