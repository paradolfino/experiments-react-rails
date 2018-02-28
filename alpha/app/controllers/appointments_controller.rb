class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('appt_time ASC')
    @appointment = Appointment.new
  end

  def create
    if @appointment.save

    end
  end
end
