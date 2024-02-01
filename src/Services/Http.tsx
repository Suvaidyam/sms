import axios from "axios";
// const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;
const baseUrl = 'http://localhost:2000/api'
// console.log(baseUrl);

type optionsType = {
    url: string
    method: string,
    data?: {}, 
    headers?: object
    params?: {}
}
const assignToken = (options: optionsType) => {
    let tokenObj = { token: sessionStorage.getItem('token') };
    options.headers ? Object.assign(options.headers, tokenObj) : Object.assign(options, { headers: tokenObj });
    return options;
}

const Http = (options: optionsType, noToken = false, noBaseUrl=false) => {
    let ops: optionsType = {
        url: (noBaseUrl ? '': baseUrl) + options.url,
        method: options.method,
        data: options.data,
        headers: noToken ? options.headers : assignToken(options).headers
    };
    if (options.method === 'get') {
        ops.params = options.data;
    } else {
        ops.data = options.data;
    }
    return axios(ops);
}
export default Http;