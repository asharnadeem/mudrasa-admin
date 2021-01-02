class Api::V1::StudentsController < ApplicationController

    before_action :find_student, only: [:show, :update, :destroy]
    
    # GET /students
    def index
        @students = Student.all
        render json: @students
    end

    # GET /students/:id
    def show
        render json: @student
    end

    # POST /students
    def create
        @student = Student.new(student_params)
        if @student.save
            render json: { message: 'Student successfully created.' }, status: 200
        else
            render error: { error: 'Error occured while creating student. Student has NOT been saved.' }, status: 400
        end
    end

    # PUT /students/:id
    def update
        if @student
            @student.update(student_params)
            render json: { message: 'Student successfully updated.' }, status: 200
        else
            render error: { error: 'Error occured while updating student. Changes have NOT been saved.' }, status: 400
        end
    end

    # DELETE /students/:id
    def destroy
        if @student
            @student.destroy
            render json: { message: 'Student successfully deleted.' }, status: 200
        else
            render error: { error: 'Error occured while deleting student. Student has NOT been deleted.' }, status: 400
        end
    end
        
    def student_params
        params.require(:student).permit(:student_id, :english_name, :urdu_name, :date_of_birth, :contact_number, :fathers_english_name, :fathers_urdu_name, :guardians_id, :current_address, :permanent_address, :previous_institute, :previous_education, :school_education, :admission_type, :admission_date, :admission_evaluator, :admission_notes, :evaluator_recommendation)
    end
    
    def find_student
        @student = Student.where(student_id: params[:id])
    end
end
