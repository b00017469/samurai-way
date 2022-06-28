import { SidebarType} from "./Store";
import {ActionType} from "./actionType";

const initialState: SidebarType = {}
const sidebarReducer = (state = initialState, action: ActionType) => {
    return state
}
export default sidebarReducer