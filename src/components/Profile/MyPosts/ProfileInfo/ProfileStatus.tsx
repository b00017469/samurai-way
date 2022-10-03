import React, {ChangeEvent} from 'react';

type ProfileStatusProps = {
    status: string
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusProps> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode = ()=>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    changeStatus = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState(e.currentTarget.value)
    }

    render() {
        return (<div>
                {this.state.editMode
                    ?
                    <div>
                        <input autoFocus={true}
                             value={this.props.status}
                        onBlur={this.deactivatedEditMode}
                        onChange={this.changeStatus}/>
                    </div>
                    :
                    <div>
                        <span
                            onDoubleClick={this.activatedEditMode}>{this.props.status}</span>
                    </div>}
            </div>
        );
    }
}

export default ProfileStatus;