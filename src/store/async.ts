import { createAction, PayloadActionCreator } from "@reduxjs/toolkit"

interface Callbacks<Result> {
  onSuccess?: (result: Result) => void
  onFailure?: (error: unknown) => void
  onFinish?: () => void
}
type WithCallback<Result, RequestPayload = undefined> = RequestPayload extends undefined
  ? Callbacks<Result>
  : RequestPayload & Callbacks<Result>

export interface AsyncAction<
  Payload,
  Response,
  R extends string = string,
  S extends string = string,
  F extends string = string
> {
  request: PayloadActionCreator<WithCallback<Response, Payload>, R>
  success: PayloadActionCreator<{ request: Payload; response: Response }, S>
  failure: PayloadActionCreator<{ request: Payload; error: unknown }, F>
}

export const createAsyncAction =
  <R extends string, S extends string, F extends string>(request: R, success: S, failure: F) =>
  <Response, Payload>(): AsyncAction<Payload, Response, R, S, F> => ({
    request: createAction<WithCallback<Response, Payload>, R>(request),
    success: createAction<{ request: Payload; response: Response }, S>(success),
    failure: createAction<{ request: Payload; error: unknown }, F>(failure),
  })
