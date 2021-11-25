
import { City, ListResponse } from "../model"
import axiosClient from "./axiosClient"


const cityAPI={
    getAll(): Promise<ListResponse<City>>{
        const url="/cities"
        return axiosClient.get(url)
    }
}

export default cityAPI