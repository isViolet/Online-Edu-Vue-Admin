import request from '@/utils/request'
export default {
  // 1 添加课程信息
  addCourseInfo(courseInfo) {
    return request({
      url: '/edu-service/edu-course/saveCourseInfo',
      method: 'post',
      data: courseInfo
    })
  }
}
