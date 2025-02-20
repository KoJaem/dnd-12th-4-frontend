import { useMutation, useQuery } from "@tanstack/react-query"
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from "@tanstack/react-query"
import type {
  AnswerRequest,
  AnswerUpdateRequest,
  ApiAnswerShowAllResponse,
  ApiAnswerUpdateResponse,
  ApiAnswerWriteResponse,
  ApiString,
  ShowAnswersParams
} from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType, BodyType } from ".././clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const updateAnswer = (
  answerId: number,
  answerUpdateRequest: BodyType<AnswerUpdateRequest>,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<ApiAnswerUpdateResponse>(
    {
      url: `/api/answer/${answerId}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: answerUpdateRequest
    },
    options
  )
}

export const getUpdateAnswerMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateAnswer>>,
    TError,
    { answerId: number; data: BodyType<AnswerUpdateRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateAnswer>>,
  TError,
  { answerId: number; data: BodyType<AnswerUpdateRequest> },
  TContext
> => {
  const mutationKey = ["updateAnswer"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateAnswer>>,
    { answerId: number; data: BodyType<AnswerUpdateRequest> }
  > = (props) => {
    const { answerId, data } = props ?? {}

    return updateAnswer(answerId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateAnswerMutationResult = NonNullable<Awaited<ReturnType<typeof updateAnswer>>>
export type UpdateAnswerMutationBody = BodyType<AnswerUpdateRequest>
export type UpdateAnswerMutationError = ErrorType<unknown>

export const useUpdateAnswer = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateAnswer>>,
    TError,
    { answerId: number; data: BodyType<AnswerUpdateRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof updateAnswer>>,
  TError,
  { answerId: number; data: BodyType<AnswerUpdateRequest> },
  TContext
> => {
  const mutationOptions = getUpdateAnswerMutationOptions(options)

  return useMutation(mutationOptions)
}
export const deleteAnswer = (answerId: number, options?: SecondParameter<typeof customInstance>) => {
  return customInstance<ApiString>({ url: `/api/answer/${answerId}`, method: "DELETE" }, options)
}

export const getDeleteAnswerMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAnswer>>, TError, { answerId: number }, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof deleteAnswer>>, TError, { answerId: number }, TContext> => {
  const mutationKey = ["deleteAnswer"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteAnswer>>, { answerId: number }> = (props) => {
    const { answerId } = props ?? {}

    return deleteAnswer(answerId, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteAnswerMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAnswer>>>

export type DeleteAnswerMutationError = ErrorType<unknown>

export const useDeleteAnswer = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAnswer>>, TError, { answerId: number }, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<Awaited<ReturnType<typeof deleteAnswer>>, TError, { answerId: number }, TContext> => {
  const mutationOptions = getDeleteAnswerMutationOptions(options)

  return useMutation(mutationOptions)
}
export const showAnswers = (
  questionId: number,
  params?: ShowAnswersParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiAnswerShowAllResponse>(
    { url: `/api/answer/${questionId}`, method: "GET", params, signal },
    options
  )
}

export const getShowAnswersQueryKey = (questionId: number, params?: ShowAnswersParams) => {
  return [`/api/answer/${questionId}`, ...(params ? [params] : [])] as const
}

export const getShowAnswersQueryOptions = <
  TData = Awaited<ReturnType<typeof showAnswers>>,
  TError = ErrorType<unknown>
>(
  questionId: number,
  params?: ShowAnswersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof showAnswers>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getShowAnswersQueryKey(questionId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showAnswers>>> = ({ signal }) =>
    showAnswers(questionId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!questionId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof showAnswers>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type ShowAnswersQueryResult = NonNullable<Awaited<ReturnType<typeof showAnswers>>>
export type ShowAnswersQueryError = ErrorType<unknown>

export function useShowAnswers<TData = Awaited<ReturnType<typeof showAnswers>>, TError = ErrorType<unknown>>(
  questionId: number,
  params: undefined | ShowAnswersParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof showAnswers>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof showAnswers>>,
          TError,
          Awaited<ReturnType<typeof showAnswers>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useShowAnswers<TData = Awaited<ReturnType<typeof showAnswers>>, TError = ErrorType<unknown>>(
  questionId: number,
  params?: ShowAnswersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof showAnswers>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof showAnswers>>,
          TError,
          Awaited<ReturnType<typeof showAnswers>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useShowAnswers<TData = Awaited<ReturnType<typeof showAnswers>>, TError = ErrorType<unknown>>(
  questionId: number,
  params?: ShowAnswersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof showAnswers>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useShowAnswers<TData = Awaited<ReturnType<typeof showAnswers>>, TError = ErrorType<unknown>>(
  questionId: number,
  params?: ShowAnswersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof showAnswers>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getShowAnswersQueryOptions(questionId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const writeAnswer = (
  questionId: number,
  answerRequest: BodyType<AnswerRequest>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiAnswerWriteResponse>(
    {
      url: `/api/answer/${questionId}`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: answerRequest,
      signal
    },
    options
  )
}

export const getWriteAnswerMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof writeAnswer>>,
    TError,
    { questionId: number; data: BodyType<AnswerRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof writeAnswer>>,
  TError,
  { questionId: number; data: BodyType<AnswerRequest> },
  TContext
> => {
  const mutationKey = ["writeAnswer"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof writeAnswer>>,
    { questionId: number; data: BodyType<AnswerRequest> }
  > = (props) => {
    const { questionId, data } = props ?? {}

    return writeAnswer(questionId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type WriteAnswerMutationResult = NonNullable<Awaited<ReturnType<typeof writeAnswer>>>
export type WriteAnswerMutationBody = BodyType<AnswerRequest>
export type WriteAnswerMutationError = ErrorType<unknown>

export const useWriteAnswer = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof writeAnswer>>,
    TError,
    { questionId: number; data: BodyType<AnswerRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof writeAnswer>>,
  TError,
  { questionId: number; data: BodyType<AnswerRequest> },
  TContext
> => {
  const mutationOptions = getWriteAnswerMutationOptions(options)

  return useMutation(mutationOptions)
}
