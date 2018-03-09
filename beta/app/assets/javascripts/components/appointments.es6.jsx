class Appointments extends React.Component {
    render() {
        return (
            <div>
                {this.props.appointments.map((appt)=>{
                    return(
                        <h3>{appt.title}</h3>
                        <p>{appt.appt_time}</p>
                    )
                })}
            </div>
        );
    }
}