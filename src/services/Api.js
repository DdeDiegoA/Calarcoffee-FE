import { calar_coffee_token, dev_api_url, mode } from '../utils/settings';

const apiUrl = {
  dev: dev_api_url,
};

class Api {
  getHeaders = () => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    let sessionStatus = this.haveToken();
    if (sessionStatus) {
      headers.Authorization = `Bearer ${sessionStatus}`;
    }
    return headers;
  };

  getParams = (method, data) => {
    const headers = this.getHeaders();
    const params = {
      mode: 'cors',
      method,
      headers,
    };
    if (
      method.toLowerCase() !== 'get' &&
      method.toLowerCase() !== 'delete' &&
      data
    ) {
      params.body = JSON.stringify(data);
    }
    return params;
  };

  haveToken = () => {
    const cookies = document.cookie.split(';');
    let tokenCookie = cookies.filter(
      (item) => item.indexOf(`${calar_coffee_token}_token=`) >= 0
    );

    if (tokenCookie && tokenCookie.length) {
      const tokenCalarCoffee = tokenCookie[0];
      const token = tokenCalarCoffee.split('=')[1];
      return token;
    }
    return false;
  };

  async fetchApi(url, params) {
    try {
      const response = await fetch(url, params);
      const data = await response.json();
      return { status: response.status, response: data };
    } catch (error) {
      console.error('API_ERROR: ', error);
      return { staus: 500, response: null };
    }
  }

  async asyncCallMethod(path, method, data = null) {
    const params = this.getParams(method, data);
    const url = apiUrl[mode] + path;
    return await this.fetchApi(url, params);
  }

  async asyncSendFormData(path, method, data = null) {
    const params = this.getParams(method, data);
    delete params.headers['Content-Type'];
    params.body = data;

    const url = apiUrl[mode] + path;
    return await this.fetchApi(url, params);
  }
}
export default new Api();
