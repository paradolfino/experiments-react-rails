class Appointments extends React.Component {
    render() {
        return (
            <div>
                {this.props.appointments.map((appt)=>{
                    <h3>{appt.title}</h3>
                    <p>{appt.time}</h3>
                })}
            </div>
        );
    }
}