type RequestOptions = Omit<RequestInit, "body"> & {
  body?: BodyInit | Record<string, unknown>
}

export async function request<TResponse>(
  input: RequestInfo | URL,
  options: RequestOptions = {},
): Promise<TResponse> {
  const { body, headers, ...init } = options
  const isJsonBody =
    body !== undefined &&
    typeof body === "object" &&
    body.constructor === Object
  const requestHeaders = new Headers(headers)

  if (isJsonBody && !requestHeaders.has("Content-Type")) {
    requestHeaders.set("Content-Type", "application/json")
  }

  const response = await fetch(input, {
    ...init,
    headers: requestHeaders,
    body: isJsonBody ? JSON.stringify(body) : (body as BodyInit | undefined),
  })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json() as Promise<TResponse>
}
