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
  ApiChannelFriendShowAllResponse,
  ApiMemberResponse,
  ApiMyChannelMemberShowAllResponse,
  ApiString,
  FindMyChannelMemberInfoParams,
  FindMyFriendsParams,
  RegisterNameParams
} from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType } from ".././clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const registerName = (
  params: RegisterNameParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiString>({ url: `/api/members/name`, method: "POST", params, signal }, options)
}

export const getRegisterNameMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof registerName>>,
    TError,
    { params: RegisterNameParams },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof registerName>>, TError, { params: RegisterNameParams }, TContext> => {
  const mutationKey = ["registerName"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof registerName>>, { params: RegisterNameParams }> = (
    props
  ) => {
    const { params } = props ?? {}

    return registerName(params, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type RegisterNameMutationResult = NonNullable<Awaited<ReturnType<typeof registerName>>>

export type RegisterNameMutationError = ErrorType<unknown>

export const useRegisterName = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof registerName>>,
    TError,
    { params: RegisterNameParams },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<Awaited<ReturnType<typeof registerName>>, TError, { params: RegisterNameParams }, TContext> => {
  const mutationOptions = getRegisterNameMutationOptions(options)

  return useMutation(mutationOptions)
}
export const findMemberInfo = (options?: SecondParameter<typeof customInstance>, signal?: AbortSignal) => {
  return customInstance<ApiMemberResponse>({ url: `/api/members`, method: "GET", signal }, options)
}

export const getFindMemberInfoQueryKey = () => {
  return [`/api/members`] as const
}

export const getFindMemberInfoQueryOptions = <
  TData = Awaited<ReturnType<typeof findMemberInfo>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMemberInfo>>, TError, TData>>
  request?: SecondParameter<typeof customInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindMemberInfoQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findMemberInfo>>> = ({ signal }) =>
    findMemberInfo(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findMemberInfo>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindMemberInfoQueryResult = NonNullable<Awaited<ReturnType<typeof findMemberInfo>>>
export type FindMemberInfoQueryError = ErrorType<unknown>

export function useFindMemberInfo<
  TData = Awaited<ReturnType<typeof findMemberInfo>>,
  TError = ErrorType<unknown>
>(options: {
  query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMemberInfo>>, TError, TData>> &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof findMemberInfo>>,
        TError,
        Awaited<ReturnType<typeof findMemberInfo>>
      >,
      "initialData"
    >
  request?: SecondParameter<typeof customInstance>
}): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMemberInfo<
  TData = Awaited<ReturnType<typeof findMemberInfo>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMemberInfo>>, TError, TData>> &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof findMemberInfo>>,
        TError,
        Awaited<ReturnType<typeof findMemberInfo>>
      >,
      "initialData"
    >
  request?: SecondParameter<typeof customInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMemberInfo<
  TData = Awaited<ReturnType<typeof findMemberInfo>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMemberInfo>>, TError, TData>>
  request?: SecondParameter<typeof customInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindMemberInfo<
  TData = Awaited<ReturnType<typeof findMemberInfo>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMemberInfo>>, TError, TData>>
  request?: SecondParameter<typeof customInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindMemberInfoQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const findMyFriends = (
  params?: FindMyFriendsParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiChannelFriendShowAllResponse>(
    { url: `/api/members/friends`, method: "GET", params, signal },
    options
  )
}

export const getFindMyFriendsQueryKey = (params?: FindMyFriendsParams) => {
  return [`/api/members/friends`, ...(params ? [params] : [])] as const
}

export const getFindMyFriendsQueryOptions = <
  TData = Awaited<ReturnType<typeof findMyFriends>>,
  TError = ErrorType<unknown>
>(
  params?: FindMyFriendsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyFriends>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindMyFriendsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findMyFriends>>> = ({ signal }) =>
    findMyFriends(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findMyFriends>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindMyFriendsQueryResult = NonNullable<Awaited<ReturnType<typeof findMyFriends>>>
export type FindMyFriendsQueryError = ErrorType<unknown>

export function useFindMyFriends<TData = Awaited<ReturnType<typeof findMyFriends>>, TError = ErrorType<unknown>>(
  params: undefined | FindMyFriendsParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyFriends>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findMyFriends>>,
          TError,
          Awaited<ReturnType<typeof findMyFriends>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMyFriends<TData = Awaited<ReturnType<typeof findMyFriends>>, TError = ErrorType<unknown>>(
  params?: FindMyFriendsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyFriends>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findMyFriends>>,
          TError,
          Awaited<ReturnType<typeof findMyFriends>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMyFriends<TData = Awaited<ReturnType<typeof findMyFriends>>, TError = ErrorType<unknown>>(
  params?: FindMyFriendsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyFriends>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindMyFriends<TData = Awaited<ReturnType<typeof findMyFriends>>, TError = ErrorType<unknown>>(
  params?: FindMyFriendsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyFriends>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindMyFriendsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const findMyChannelMemberInfo = (
  params?: FindMyChannelMemberInfoParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiMyChannelMemberShowAllResponse>(
    { url: `/api/members/channel-members`, method: "GET", params, signal },
    options
  )
}

export const getFindMyChannelMemberInfoQueryKey = (params?: FindMyChannelMemberInfoParams) => {
  return [`/api/members/channel-members`, ...(params ? [params] : [])] as const
}

export const getFindMyChannelMemberInfoQueryOptions = <
  TData = Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
  TError = ErrorType<unknown>
>(
  params?: FindMyChannelMemberInfoParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberInfo>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindMyChannelMemberInfoQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findMyChannelMemberInfo>>> = ({ signal }) =>
    findMyChannelMemberInfo(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindMyChannelMemberInfoQueryResult = NonNullable<Awaited<ReturnType<typeof findMyChannelMemberInfo>>>
export type FindMyChannelMemberInfoQueryError = ErrorType<unknown>

export function useFindMyChannelMemberInfo<
  TData = Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
  TError = ErrorType<unknown>
>(
  params: undefined | FindMyChannelMemberInfoParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberInfo>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
          TError,
          Awaited<ReturnType<typeof findMyChannelMemberInfo>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMyChannelMemberInfo<
  TData = Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
  TError = ErrorType<unknown>
>(
  params?: FindMyChannelMemberInfoParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberInfo>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
          TError,
          Awaited<ReturnType<typeof findMyChannelMemberInfo>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMyChannelMemberInfo<
  TData = Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
  TError = ErrorType<unknown>
>(
  params?: FindMyChannelMemberInfoParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberInfo>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindMyChannelMemberInfo<
  TData = Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
  TError = ErrorType<unknown>
>(
  params?: FindMyChannelMemberInfoParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberInfo>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindMyChannelMemberInfoQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}
