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
        console.warn('use profileAPI')
        return profileAPI.getProfile(userId)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then((response)=>response.data)
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`, {})
            .then((response)=>response.data)
    }
}
export const authAPI ={
    me(){
        return instance.get(`auth/me`)
            .then((response)=>response.data)
    }
}

export const profileAPI = {
    getProfile(userId:string){
        return instance.get(`profile/${userId}`)
            .then((response)=>response.data)
    },
    getStatus(userId: string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(statusMessage:string){
        return instance.put(`profile/status`, {status: statusMessage})
    }
}