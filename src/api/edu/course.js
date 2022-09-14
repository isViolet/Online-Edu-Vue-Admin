import request from '@/utils/request'

const api_name = '/edu-service/edu-course'

export default {
  // 1 添加课程信息
  addCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/saveCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },
  getCourseInfoById(id) {
    return request({
      url: `${api_name}/getById?=${id}`,
      method: 'get'
    })
  },
  updateCourseInfoById(courseInfo) {
    return request({
      url: `${api_name}/updateCourseInfoById?id=${courseInfo.id}`,
      method: 'put',
      data: courseInfo
    })
  }
}
