import { useMutation } from "@tanstack/react-query"
import type { MutationFunction, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import type { ApiRefreshTokenResponse } from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType } from ".././clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const refreshAccessToken = (options?: SecondParameter<typeof customInstance>, signal?: AbortSignal) => {
  return customInstance<ApiRefreshTokenResponse>({ url: `/auth/refresh`, method: "POST", signal }, options)
}

export const getRefreshAccessTokenMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof refreshAccessToken>>, TError, void, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof refreshAccessToken>>, TError, void, TContext> => {
  const mutationKey = ["refreshAccessToken"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof refreshAccessToken>>, void> = () => {
    return refreshAccessToken(requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type RefreshAccessTokenMutationResult = NonNullable<Awaited<ReturnType<typeof refreshAccessToken>>>

export type RefreshAccessTokenMutationError = ErrorType<unknown>

export const useRefreshAccessToken = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof refreshAccessToken>>, TError, void, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<Awaited<ReturnType<typeof refreshAccessToken>>, TError, void, TContext> => {
  const mutationOptions = getRefreshAccessTokenMutationOptions(options)

  return useMutation(mutationOptions)
}
