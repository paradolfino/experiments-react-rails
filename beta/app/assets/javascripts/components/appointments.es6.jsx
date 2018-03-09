class Appointments extends React.Component {
    render() {
        return (
            <div>
                {this.props.appointments.map((appointment)=>{
                    return (
                        <h3>{appointment.title}</h3>
                        <p>{appointment.appt_time}</p>
                    );
                })}
            </div>
        );
    }
}