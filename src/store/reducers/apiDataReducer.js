const initialState = {
  currentStage: 'launch',
  currentLocationData: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_DATA':
      const stage = action.stage ?
        action.stage : state.stage
      return {
        currentStage: stage,
        currentLocationData: action.data
      }
    default:
      return state
  }
}

export default reducer