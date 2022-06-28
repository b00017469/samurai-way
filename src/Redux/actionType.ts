import {AddNewTextareaActionType, AddPostActionType} from "./profile-reducer";
import {AddMessageActionType, AddNewTextMessageActionType} from "./dialogs-reducer";
import {FollowActionType, SetUsersActionType, UnfollowActionType} from "./users-reducer";

export type ActionType =
    AddPostActionType
    | AddNewTextareaActionType
    | AddNewTextMessageActionType
    | AddMessageActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType