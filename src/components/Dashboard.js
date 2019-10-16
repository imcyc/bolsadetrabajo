import React from 'react';

const Dashboard = () => {

    sendData = () => {
        this.props.parentCallback("Hey Popsie, How’s it going?");
    };

    return(
        <div>
            <h1 onClick={this.sendData}>Dashboard</h1>
        </div>
    )
}

export default Dashboard;