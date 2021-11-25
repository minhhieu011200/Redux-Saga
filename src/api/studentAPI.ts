import { ListResponse, Student } from "../model"
import { ListParams } from "../model/listParams"
import axiosClient from "./axiosClient"

const studentAPI={
    getAll(params: ListParams): Promise<ListResponse<Student>>{
        const url="/students"
        return axiosClient.get(url, {params})
    }
}

export default studentAPI