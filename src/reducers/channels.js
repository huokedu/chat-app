const initialState = {
  active: {
    name: '',
    id: 0
  },
  all: []
}

export function channels (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CHANNEL':
      let channel = { name: action.name, id: 2312412 }
      let updatedChannels = state.all.concat(channel)
      return {
        ...state,
        active: channel,
        all: updatedChannels
      }
    case 'LOAD_CHANNELS':
      let loadedChannels = state.all.concat(action.json)
      return {
        ...state,
        all: loadedChannels
      }
    default:
      return state
  }
}