
import Cookies from 'universal-cookie';
const cookies = new Cookies(); 

export function setRefreshTokenToCookie(refreshToken) {
  cookies.set('refreshToken', refreshToken, { sameSite: 'strict', secure : true,})
}

export function setAccessTokenToCookie(accessToken) {
  cookies.set('accessToken', accessToken, {sameSite: 'strict', secure : true, })
}

export const getCookie = (name) => {
  return cookies.get(name);
}