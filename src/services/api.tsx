import axios from 'axios'

const BASE_URL = 'http://localhost:5000'
//const BASE_URL = ''
function createConfig(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

export function signUp(body: any) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body)
  return promise
}

export function signIn(body: any) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body)
  return promise
}

export function logOut(token: string) {
  const config = createConfig(token)
  
  const promise = axios.post(`${BASE_URL}/logout`,{},config)
  return promise
}

export function insertCreditCard(token: string, body: any) {
  const config = createConfig(token)
  
  const promise = axios.post(`${BASE_URL}/credit-card`,body,config)
  return promise
}

export function getCreditCards(token: string) {
  const config = createConfig(token)
  
  const promise = axios.get(`${BASE_URL}/credit-card`,config)
  return promise
}

export function deleteCreditCard(token: string, id:number) {
  const config = createConfig(token)
  
  const promise = axios.post(`${BASE_URL}/credit-card/${id}/delete`,{},config)
  return promise
}

export function insertBankAccount(token: string, body: any) {
  const config = createConfig(token)
  
  const promise = axios.post(`${BASE_URL}/bank-account`,body,config)
  return promise
}

export function getBankAccount(token: string) {
  const config = createConfig(token)
  
  const promise = axios.get(`${BASE_URL}/bank-account`,config)
  return promise
}

export function deleteBankAccount(token: string, id:number) {
  const config = createConfig(token)
  
  const promise = axios.post(`${BASE_URL}/bank-account/${id}/delete`,{},config)
  return promise
}

export function insertTransaction(token: string, body: any) {
  const config = createConfig(token)
  
  const promise = axios.post(`${BASE_URL}/transactions`,body,config)
  return promise
}

export function getTransactions(token: string) {
  const config = createConfig(token)
  
  const promise = axios.get(`${BASE_URL}/transactions`,config)
  return promise
}

export function deleteTransactions(token: string, id:number) {
  const config = createConfig(token)
  
  const promise = axios.post(`${BASE_URL}/transactions/${id}/delete`,{},config)
  return promise
}

export function getCategories(token: string) {
  const config = createConfig(token)
  
  const promise = axios.get(`${BASE_URL}/categories`,config)
  return promise
}


export function getDashboard(token: string) {
  const config = createConfig(token)
  
  const promise = axios.get(`${BASE_URL}/transactions/dashboard`,config)
  return promise
}

