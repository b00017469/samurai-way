import {
    AddNewTextareaActionType,
    AddPostActionType,
    SetUserProfileStatusType,
    SetUserProfileType
} from "./profile-reducer";
import {AddMessageActionType, AddNewTextMessageActionType} from "./dialogs-reducer";
import {
    FollowActionType,
    SetCurrentPageActionType, SetFollowingProgressActionType,
    SetIsFetchingActionType,
    SetTotalUsersCountActionType,
    SetUsersActionType,
    UnfollowActionType
} from "./users-reducer";
import {SetUserDataType} from "./auth-reducer";

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
    | SetUserDataType
    | SetFollowingProgressActionType
    | SetUserProfileStatusType