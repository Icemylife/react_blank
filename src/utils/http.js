/**
 * @type {Object}
 */
export const HTTP_ERROR_CODE_LIST = {
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Server under maintenance (Updating servers)',
  401: 'Unauthorized',
  404: 'Not found'
}

// fn handlers

/**
 * Parse errors from response
 * @param errorResponse
 * @return {{code : number, message : string}}
 */
export const parseError = (errorResponse) => {
  let result = {
    code: 200,
    errorCode: '',
    message: ''
  }

  if (!errorResponse) {
    result.message = 'Network Error'
  }

  // parse http errors
  if (HTTP_ERROR_CODE_LIST[errorResponse.status]) {
    result.code = errorResponse.status
    result.message = errorResponse.statusText
  }

  return result
}

/**
 * Parse body
 * @param response
 * @return {*}
 */
export const parseBody = (response) => {
  const { data } = response

  return data && data.hasOwnProperty('payload')
    ? data.payload
    : data
}
