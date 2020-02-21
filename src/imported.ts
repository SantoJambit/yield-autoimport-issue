import { call, select } from 'redux-saga/effects';

export function* foo() {
    const test = yield select(() => 0);
    yield call((a: string) => a, '');
}
