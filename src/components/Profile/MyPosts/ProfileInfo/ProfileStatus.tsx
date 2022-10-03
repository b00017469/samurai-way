import React from 'react';

type ProfileStatusProps = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusProps> {
    state = {
        editMode: false
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
    }

    render() {
        return (<div>
                {this.state.editMode
                    ?
                    <div>
                        <input autoFocus={true}
                             value={this.props.status}
                        onBlur={this.deactivatedEditMode}/>
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