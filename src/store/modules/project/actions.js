import { apiProject } from '../../../services'

const handleLoading = (context, status) => {
  context.commit('handleLoading', status)
}

const getProjects = async context => {
  try {
    let response = await apiProject.getProjects()
    context.commit('getProjects', response)
  } catch (err) {
    context.commit('handleErrors', err.response)
  }
}

export default {
  handleLoading,
  getProjects
}