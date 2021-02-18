const BaseURL = "https://jsonplaceholder.typicode.com"
const api = {
  getAllUsers: async () => {
    const response = await fetch(`${BaseURL}/users`)
    const data = response.json()
    return data
  },

  getPostsByUser: async (idUser) => {
    const response = await fetch(`${BaseURL}/users/${idUser}/posts`)
    const data = response.json()
    return data
  },

  getCommentsByPost: async (idPost) => {
    const response = await fetch(`${BaseURL}/posts/${idPost}/comments`)
    const data = response.json()
    return data
  },
  
}

export default api