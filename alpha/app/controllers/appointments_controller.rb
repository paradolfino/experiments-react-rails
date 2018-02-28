class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('appt_time ASC')
    @appointment = Appointment.new
  end

  def create
    @appointment = Appointment.new(params_appt)
    if @appointment.save
      
    end
  end

  private

  def params_appt
    params.require(:appointment).permit(:title, :appt_time)
  end
end
