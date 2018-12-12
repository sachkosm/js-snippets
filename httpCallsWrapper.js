import { default as origAxios } from 'axios'
import { default as origFetch } from 'cross-fetch'

const URLSuffix = '' // '?Application=MyApplication

const formatURL = (url) => {
    let q = '?'
    if (URLSuffix !== "" && url.indexOf('?') > 0) {
        q = '&'
        url = url + q + URLSuffix.replace("?", "")
    }
    return url
}

//Wrapping Axios
export default function axios(args) {
    let { url } = args
    url = formatURL(url)
    let arg = { ...args, url: url }
    return origAxios(arg)
}

axios.get = (url, args) => {
    url = formatURL(url)
    return origAxios.get(url, args)
}
//========================

//Wraping fetch
export function (url, ...args) {
    url = formatURL(url)
    return fetch(url, ...args)
}
//========================

//Wrapping cross-fetch
export function crossFetch(url, ...args) {
    url = formatURL(url)
    return origFetch(url, ...args)
}
//==========================


//Usage:

//import {fetch} from './httpCallsWrapper'
//import {crossFetch} from './httpCallsWrapper'
//import {axios} from './httpCallsWrapper'


