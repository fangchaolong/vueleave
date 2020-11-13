const getters = {
  name: state => state.user.name,
  addRouters: state => state.permission.addRouters,
  routerbtn: state => state.permission.routerbtn
}

export default getters
