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
  ApiChannelShowAllResponse,
  ApiChannelSpecificResponse,
  ApiChannelStatusResponse,
  ChannelCreateRequest,
  ChannelNameUpdateResponse,
  ChannelResponse,
  FindChannelByNameParams,
  FindChannelInviteCodeParams,
  FindChannelsByRoleParams,
  InviteCodeDto,
  UpdateChannelNameParams
} from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType, BodyType } from ".././clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const updateChannelName = (
  channelId: string,
  params: UpdateChannelNameParams,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<ChannelNameUpdateResponse>(
    { url: `/api/channels/${channelId}/channelName`, method: "PUT", params },
    options
  )
}

export const getUpdateChannelNameMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateChannelName>>,
    TError,
    { channelId: string; params: UpdateChannelNameParams },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateChannelName>>,
  TError,
  { channelId: string; params: UpdateChannelNameParams },
  TContext
> => {
  const mutationKey = ["updateChannelName"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateChannelName>>,
    { channelId: string; params: UpdateChannelNameParams }
  > = (props) => {
    const { channelId, params } = props ?? {}

    return updateChannelName(channelId, params, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateChannelNameMutationResult = NonNullable<Awaited<ReturnType<typeof updateChannelName>>>

export type UpdateChannelNameMutationError = ErrorType<unknown>

export const useUpdateChannelName = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateChannelName>>,
    TError,
    { channelId: string; params: UpdateChannelNameParams },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof updateChannelName>>,
  TError,
  { channelId: string; params: UpdateChannelNameParams },
  TContext
> => {
  const mutationOptions = getUpdateChannelNameMutationOptions(options)

  return useMutation(mutationOptions)
}
export const findChannelByName = (
  params: FindChannelByNameParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiChannelSpecificResponse>({ url: `/api/channels`, method: "GET", params, signal }, options)
}

export const getFindChannelByNameQueryKey = (params: FindChannelByNameParams) => {
  return [`/api/channels`, ...(params ? [params] : [])] as const
}

export const getFindChannelByNameQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelByName>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelByNameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelByName>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelByNameQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelByName>>> = ({ signal }) =>
    findChannelByName(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findChannelByName>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindChannelByNameQueryResult = NonNullable<Awaited<ReturnType<typeof findChannelByName>>>
export type FindChannelByNameQueryError = ErrorType<unknown>

export function useFindChannelByName<
  TData = Awaited<ReturnType<typeof findChannelByName>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelByNameParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelByName>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelByName>>,
          TError,
          Awaited<ReturnType<typeof findChannelByName>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelByName<
  TData = Awaited<ReturnType<typeof findChannelByName>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelByNameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelByName>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelByName>>,
          TError,
          Awaited<ReturnType<typeof findChannelByName>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelByName<
  TData = Awaited<ReturnType<typeof findChannelByName>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelByNameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelByName>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelByName<
  TData = Awaited<ReturnType<typeof findChannelByName>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelByNameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelByName>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelByNameQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const makeChannel = (
  channelCreateRequest: BodyType<ChannelCreateRequest>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ChannelResponse>(
    {
      url: `/api/channels`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: channelCreateRequest,
      signal
    },
    options
  )
}

export const getMakeChannelMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof makeChannel>>,
    TError,
    { data: BodyType<ChannelCreateRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof makeChannel>>,
  TError,
  { data: BodyType<ChannelCreateRequest> },
  TContext
> => {
  const mutationKey = ["makeChannel"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof makeChannel>>,
    { data: BodyType<ChannelCreateRequest> }
  > = (props) => {
    const { data } = props ?? {}

    return makeChannel(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type MakeChannelMutationResult = NonNullable<Awaited<ReturnType<typeof makeChannel>>>
export type MakeChannelMutationBody = BodyType<ChannelCreateRequest>
export type MakeChannelMutationError = ErrorType<unknown>

export const useMakeChannel = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof makeChannel>>,
    TError,
    { data: BodyType<ChannelCreateRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof makeChannel>>,
  TError,
  { data: BodyType<ChannelCreateRequest> },
  TContext
> => {
  const mutationOptions = getMakeChannelMutationOptions(options)

  return useMutation(mutationOptions)
}
export const findChannelById = (
  channelId: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiChannelSpecificResponse>(
    { url: `/api/channels/${channelId}`, method: "GET", signal },
    options
  )
}

export const getFindChannelByIdQueryKey = (channelId: string) => {
  return [`/api/channels/${channelId}`] as const
}

export const getFindChannelByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelById>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelById>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelByIdQueryKey(channelId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelById>>> = ({ signal }) =>
    findChannelById(channelId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!channelId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findChannelById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindChannelByIdQueryResult = NonNullable<Awaited<ReturnType<typeof findChannelById>>>
export type FindChannelByIdQueryError = ErrorType<unknown>

export function useFindChannelById<TData = Awaited<ReturnType<typeof findChannelById>>, TError = ErrorType<unknown>>(
  channelId: string,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelById>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelById>>,
          TError,
          Awaited<ReturnType<typeof findChannelById>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelById<TData = Awaited<ReturnType<typeof findChannelById>>, TError = ErrorType<unknown>>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelById>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelById>>,
          TError,
          Awaited<ReturnType<typeof findChannelById>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelById<TData = Awaited<ReturnType<typeof findChannelById>>, TError = ErrorType<unknown>>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelById>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelById<TData = Awaited<ReturnType<typeof findChannelById>>, TError = ErrorType<unknown>>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelById>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelByIdQueryOptions(channelId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const deleteChannel = (channelId: string, options?: SecondParameter<typeof customInstance>) => {
  return customInstance<string>({ url: `/api/channels/${channelId}`, method: "DELETE" }, options)
}

export const getDeleteChannelMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteChannel>>, TError, { channelId: string }, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof deleteChannel>>, TError, { channelId: string }, TContext> => {
  const mutationKey = ["deleteChannel"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteChannel>>, { channelId: string }> = (props) => {
    const { channelId } = props ?? {}

    return deleteChannel(channelId, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteChannelMutationResult = NonNullable<Awaited<ReturnType<typeof deleteChannel>>>

export type DeleteChannelMutationError = ErrorType<unknown>

export const useDeleteChannel = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteChannel>>, TError, { channelId: string }, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<Awaited<ReturnType<typeof deleteChannel>>, TError, { channelId: string }, TContext> => {
  const mutationOptions = getDeleteChannelMutationOptions(options)

  return useMutation(mutationOptions)
}
export const findChannelStatus = (
  channelId: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiChannelStatusResponse>(
    { url: `/api/channels/${channelId}/status`, method: "GET", signal },
    options
  )
}

export const getFindChannelStatusQueryKey = (channelId: string) => {
  return [`/api/channels/${channelId}/status`] as const
}

export const getFindChannelStatusQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelStatus>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelStatus>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelStatusQueryKey(channelId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelStatus>>> = ({ signal }) =>
    findChannelStatus(channelId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!channelId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findChannelStatus>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindChannelStatusQueryResult = NonNullable<Awaited<ReturnType<typeof findChannelStatus>>>
export type FindChannelStatusQueryError = ErrorType<unknown>

export function useFindChannelStatus<
  TData = Awaited<ReturnType<typeof findChannelStatus>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelStatus>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelStatus>>,
          TError,
          Awaited<ReturnType<typeof findChannelStatus>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelStatus<
  TData = Awaited<ReturnType<typeof findChannelStatus>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelStatus>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelStatus>>,
          TError,
          Awaited<ReturnType<typeof findChannelStatus>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelStatus<
  TData = Awaited<ReturnType<typeof findChannelStatus>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelStatus>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelStatus<
  TData = Awaited<ReturnType<typeof findChannelStatus>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelStatus>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelStatusQueryOptions(channelId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const findChannelInviteCode = (
  params: FindChannelInviteCodeParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<InviteCodeDto>({ url: `/api/channels/inviteCode`, method: "GET", params, signal }, options)
}

export const getFindChannelInviteCodeQueryKey = (params: FindChannelInviteCodeParams) => {
  return [`/api/channels/inviteCode`, ...(params ? [params] : [])] as const
}

export const getFindChannelInviteCodeQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelInviteCode>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelInviteCodeParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelInviteCode>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelInviteCodeQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelInviteCode>>> = ({ signal }) =>
    findChannelInviteCode(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findChannelInviteCode>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindChannelInviteCodeQueryResult = NonNullable<Awaited<ReturnType<typeof findChannelInviteCode>>>
export type FindChannelInviteCodeQueryError = ErrorType<unknown>

export function useFindChannelInviteCode<
  TData = Awaited<ReturnType<typeof findChannelInviteCode>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelInviteCodeParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelInviteCode>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelInviteCode>>,
          TError,
          Awaited<ReturnType<typeof findChannelInviteCode>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelInviteCode<
  TData = Awaited<ReturnType<typeof findChannelInviteCode>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelInviteCodeParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelInviteCode>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelInviteCode>>,
          TError,
          Awaited<ReturnType<typeof findChannelInviteCode>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelInviteCode<
  TData = Awaited<ReturnType<typeof findChannelInviteCode>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelInviteCodeParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelInviteCode>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelInviteCode<
  TData = Awaited<ReturnType<typeof findChannelInviteCode>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelInviteCodeParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelInviteCode>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelInviteCodeQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const findChannelsByRole = (
  params?: FindChannelsByRoleParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiChannelShowAllResponse>(
    { url: `/api/channels/channel-profile`, method: "GET", params, signal },
    options
  )
}

export const getFindChannelsByRoleQueryKey = (params?: FindChannelsByRoleParams) => {
  return [`/api/channels/channel-profile`, ...(params ? [params] : [])] as const
}

export const getFindChannelsByRoleQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelsByRole>>,
  TError = ErrorType<unknown>
>(
  params?: FindChannelsByRoleParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelsByRole>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelsByRoleQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelsByRole>>> = ({ signal }) =>
    findChannelsByRole(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findChannelsByRole>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindChannelsByRoleQueryResult = NonNullable<Awaited<ReturnType<typeof findChannelsByRole>>>
export type FindChannelsByRoleQueryError = ErrorType<unknown>

export function useFindChannelsByRole<
  TData = Awaited<ReturnType<typeof findChannelsByRole>>,
  TError = ErrorType<unknown>
>(
  params: undefined | FindChannelsByRoleParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelsByRole>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelsByRole>>,
          TError,
          Awaited<ReturnType<typeof findChannelsByRole>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelsByRole<
  TData = Awaited<ReturnType<typeof findChannelsByRole>>,
  TError = ErrorType<unknown>
>(
  params?: FindChannelsByRoleParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelsByRole>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelsByRole>>,
          TError,
          Awaited<ReturnType<typeof findChannelsByRole>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelsByRole<
  TData = Awaited<ReturnType<typeof findChannelsByRole>>,
  TError = ErrorType<unknown>
>(
  params?: FindChannelsByRoleParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelsByRole>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelsByRole<
  TData = Awaited<ReturnType<typeof findChannelsByRole>>,
  TError = ErrorType<unknown>
>(
  params?: FindChannelsByRoleParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelsByRole>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelsByRoleQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}
