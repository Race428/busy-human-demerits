

const initialState = { 





    
    
     
   // add a authenticated to pull down from database 
     
   }
   
   //these are my action items 
  
//    const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS"

   
   // action creators, tells the reducer what to do 
   
  
//    export function updateUserDetails(userObj) {
//     return{
//     type:UPDATE_USER_DETAILS,
//     payload: userObj
//     }
//    }

   
  
     function UserReducer(state = initialState, action) {
   
     switch (action.type) {
    //    case UPDATE_USER_DETAILS:
    //    return { ...state, userObj: action.payload}
    //    case UPDATE_STORYBOARD_IDEA_ID: 
    //    return { ...state, storyboardIdeaId: action.payload}
    //    case UPDATE_STORYBOARD_OBJ: 
    //    return { ...state, storyboardObj: action.payload}
    //    case UPDATE_STORYBOARDS: 
    //    return { ...state, storyboards: action.payload}
    //    case UPDATE_LOCATION_INDEX: 
    //    return { ...state, locationIndex: action.payload}
    //    case UPDATE_CHANNEL_LIST:
    //    return { ...state, channels: action.payload}
    //    case UPDATE_CURRENT_CHANNEL:
    //    return { ...state, currentChannel: action.payload}
    //    case UPDATE_CHANNEL_USER_COUNT:
    //    return { ...state, channelUsers: action.payload}
    //    case UPDATE_CURRENT_STORYBOARD:
    //    return { ...state, currentStoryboard: action.payload}
    //    case UPDATE_SHOW_SUBJECTS:
    //    return { ... state,  showSubjects: action.payload}
    //    case UPDATE_CHANNEL_MESSAGES:
    //      return {...state, channelMessages: action.payload}
       default: 
         return state 
     }
   }
   export default UserReducer 
   
   