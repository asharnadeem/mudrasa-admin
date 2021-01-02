class Api::V1::TeachersController < ApplicationController

    before_action :find_teacher, only: [:show, :update, :destroy]
    
    # GET /teachers
    def index
        @teachers = Teacher.all
        render json: @teachers
    end

    # GET /teachers/:id
    def show
        render json: @teacher
    end

    # POST /teachers
    def create
        @teacher = Teacher.new(teacher_params)
        if @teacher.save
            render json: { message: 'Teacher successfully created.' }, status: 200
        else
            render error: { error: 'Error occured while creating teacher. Teacher has NOT been saved.' }, status: 400
        end
    end

    # PUT /teachers/:id
    def update
        if @teacher
            @teacher.update(teacher_params)
            render json: { message: 'Teacher successfully updated.' }, status: 200
        else
            render error: { error: 'Error occured while updating teacher. Changes have NOT been saved.' }, status: 400
        end
    end

    # DELETE /teachers/:id
    def destroy
        if @teacher
            @teacher.destroy
            render json: { message: 'Teacher successfully deleted.' }, status: 200
        else
            render error: { error: 'Error occured while deleting teacher. Teacher has NOT been deleted.' }, status: 400
        end
    end
        
    def teacher_params
        params.require(:teacher).permit(:teacher_id, :name, :government_id, :phone_number, :start_date, :end_date)
    end
    
    def find_teacher
        @teacher = Teacher.where(teacher_id: params[:id])
    end
end
