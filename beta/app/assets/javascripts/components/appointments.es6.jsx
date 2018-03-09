class Appointments extends React.Component {
    render() {
        return (
            <div>
                {this.props.appointments.map((appt)=>{
                    return <p>{appt}</p>
                })}
            </div>
        );
    }
}