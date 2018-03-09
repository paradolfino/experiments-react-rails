class Appointments extends React.Component {
    render() {
        return (

            <div>
                <AppointmentForm />
                <AppointmentsList appointments={appointments} />
            </div>
        );
    }
}