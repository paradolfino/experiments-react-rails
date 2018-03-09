class Appointment extends React.Component {
    render() {
        return (
            <div>
                <h3>{appointment.title}</h3>
                <p>{appointment.appt_time}</p>
            </div>
        );
    }
}

export default Appointment;