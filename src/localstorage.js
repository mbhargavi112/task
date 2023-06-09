export const set = (key,data) =>{
    localStorage.setItem(key, JSON.stringify(data))
  }

  export const get = (key,data) =>{
    return JSON.parse(localStorage.getItem(key))
  }