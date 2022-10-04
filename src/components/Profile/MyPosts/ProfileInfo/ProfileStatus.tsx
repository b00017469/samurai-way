import React, {ChangeEvent} from 'react';

type ProfileStatusProps = {
    status: string
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type stateProfileStatus = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusProps> {
    state: stateProfileStatus = {
        editMode: false,
        status: this.props.status
    }
    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<stateProfileStatus>) {
        if (prevState.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (<div>
                {this.state.editMode
                    ?
                    <div>
                        <input autoFocus={true}
                               value={this.state.status}
                               onBlur={this.deactivatedEditMode}
                               onChange={this.changeStatus}/>
                    </div>
                    :
                    <div>
                        <span
                            onDoubleClick={this.activatedEditMode}>{this.props.status || '------'}</span>
                    </div>}
            </div>
        );
    }
}

export default ProfileStatus;