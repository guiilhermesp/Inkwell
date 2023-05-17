export const responseHandler = (response) => {
  if (response.status >= 300) {
    const err = response.data || {};
    err.status = response.status;
    err.path = response.data.path || response.config.url;

    return err;
  }
  return response.data;
};
