class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('appt_time ASC')
    
  end
end
