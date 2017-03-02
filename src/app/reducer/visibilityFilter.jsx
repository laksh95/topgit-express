/**
 * Created by mustang on 01/03/17.
 */
const visibilityFilte=(state='SHOW_ALL', action) => {
    switch (action.type){
        case 'SET_VISIBLITY_FILTER':
                return action.filter;
        default:
            return state
    }
}
export default visibilityFilte