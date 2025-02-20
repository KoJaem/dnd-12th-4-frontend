import { useMutation } from "@tanstack/react-query"
import type { MutationFunction, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import type { ImageResponse, MemberResponse, MemberUpdateRequest, UploadProfileImageBody } from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType, BodyType } from ".././clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const uploadProfileImage = (
  uploadProfileImageBody: BodyType<UploadProfileImageBody>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ImageResponse>(
    {
      url: `/api/members/profile-image`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: uploadProfileImageBody,
      signal
    },
    options
  )
}

export const getUploadProfileImageMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadProfileImage>>,
    TError,
    { data: BodyType<UploadProfileImageBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof uploadProfileImage>>,
  TError,
  { data: BodyType<UploadProfileImageBody> },
  TContext
> => {
  const mutationKey = ["uploadProfileImage"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof uploadProfileImage>>,
    { data: BodyType<UploadProfileImageBody> }
  > = (props) => {
    const { data } = props ?? {}

    return uploadProfileImage(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UploadProfileImageMutationResult = NonNullable<Awaited<ReturnType<typeof uploadProfileImage>>>
export type UploadProfileImageMutationBody = BodyType<UploadProfileImageBody>
export type UploadProfileImageMutationError = ErrorType<unknown>

export const useUploadProfileImage = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadProfileImage>>,
    TError,
    { data: BodyType<UploadProfileImageBody> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof uploadProfileImage>>,
  TError,
  { data: BodyType<UploadProfileImageBody> },
  TContext
> => {
  const mutationOptions = getUploadProfileImageMutationOptions(options)

  return useMutation(mutationOptions)
}
export const updateMemberProfile = (
  memberUpdateRequest: BodyType<MemberUpdateRequest>,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<MemberResponse>(
    {
      url: `/api/members/profile-image`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: memberUpdateRequest
    },
    options
  )
}

export const getUpdateMemberProfileMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateMemberProfile>>,
    TError,
    { data: BodyType<MemberUpdateRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateMemberProfile>>,
  TError,
  { data: BodyType<MemberUpdateRequest> },
  TContext
> => {
  const mutationKey = ["updateMemberProfile"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateMemberProfile>>,
    { data: BodyType<MemberUpdateRequest> }
  > = (props) => {
    const { data } = props ?? {}

    return updateMemberProfile(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateMemberProfileMutationResult = NonNullable<Awaited<ReturnType<typeof updateMemberProfile>>>
export type UpdateMemberProfileMutationBody = BodyType<MemberUpdateRequest>
export type UpdateMemberProfileMutationError = ErrorType<unknown>

export const useUpdateMemberProfile = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateMemberProfile>>,
    TError,
    { data: BodyType<MemberUpdateRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof updateMemberProfile>>,
  TError,
  { data: BodyType<MemberUpdateRequest> },
  TContext
> => {
  const mutationOptions = getUpdateMemberProfileMutationOptions(options)

  return useMutation(mutationOptions)
}
