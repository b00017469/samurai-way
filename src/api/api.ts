import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "436bdb38-bfa3-4dcc-b208-6cacf9b3b7d8"}
})

export const userAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then((response) => response.data)
    },
    getProfile(userId:string){
        return instance.get(`profile/${userId ? userId : '2'}`)
            .then((response)=>response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then((response)=>response.data)
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`, {})
            .then((response)=>response.data)
    },
    authMe(){
        return instance.get(`auth/me`)
            .then((response)=>response.data)
    }
}
