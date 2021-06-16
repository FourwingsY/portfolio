import { createAction, ActionCreator } from "@reduxjs/toolkit"

interface Callbacks<Result> {
  onSuccess?: (result: Result) => void
  onFailure?: (error: unknown) => void
  onFinish?: () => void
}
type WithCallback<Result, RequestPayload = undefined> = RequestPayload extends undefined
  ? Callbacks<Result>
  : RequestPayload & Callbacks<Result>

export interface AsyncAction {
  request: ActionCreator<any>
  success: ActionCreator<any>
  failure: ActionCreator<any>
}

export const createAsyncAction =
  <R extends string, S extends string, F extends string>(request: R, success: S, failure: F) =>
  <Response, Payload>(): AsyncAction => ({
    request: createAction<WithCallback<Response, Payload>, R>(request),
    success: createAction<{ request: Payload; response: Response }, S>(success),
    failure: createAction<{ request: Payload; error: unknown }, F>(failure),
  })
