import request from '@/utils/request'

const api_name = '/edu-service/edu-chapter'

export default {

  getNestedTreeList(courseId) {
    return request({
      url: `${api_name}/nestedListByCourseId/${courseId}`,
      method: 'get'
    })
  }
}
