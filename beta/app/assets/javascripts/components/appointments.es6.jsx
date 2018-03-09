class Appointments extends React.Component {
    render() {
        return (
            <div>
                {this.props.appointments.map((appointment)=>{
                    return (
                        <Appointment />
                    )
                })}
            </div>
        );
    }
}