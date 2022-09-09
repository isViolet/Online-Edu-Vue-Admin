import request from '@/utils/request'

const api_name = '/eduservice/edu-teacher'
export default {

  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/pageList?page=${page}&limit=${limit}`,
      method: 'get',
      data: searchObj
    })
  },

  removeById(teacherId) {
    return request({
      url: `${api_name}/removeById?id=${teacherId}`,
      method: 'delete'
    })
  },

  save(teacher) {
    return request({
      url: api_name + '/save',
      method: 'post',
      data: teacher
    })
  },

  getById(id) {
    return request({
      url: `${api_name}/getById?id=${id}`,
      method: 'get'
    })
  },

  updateById(teacher) {
    return request({
      url: `${api_name}/updateById?id=${teacher.id}`,
      method: 'put',
      data: teacher
    })
  }

}
