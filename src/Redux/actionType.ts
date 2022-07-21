import {AddNewTextareaActionType, AddPostActionType, SetUserProfileType} from "./profile-reducer";
import {AddMessageActionType, AddNewTextMessageActionType} from "./dialogs-reducer";
import {
    FollowActionType,
    SetCurrentPageActionType,
    SetIsFetchingActionType,
    SetTotalUsersCountActionType,
    SetUsersActionType,
    UnfollowActionType
} from "./users-reducer";

export type ActionType =
    AddPostActionType
    | AddNewTextareaActionType
    | AddNewTextMessageActionType
    | AddMessageActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | SetIsFetchingActionType
    | SetUserProfileType