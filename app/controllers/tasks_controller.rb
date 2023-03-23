class TasksController < ApplicationController
    def index
        tasks = Task.all
        render json: tasks
    end

    def create
        task = Task.create!(task_params)
        if task
            render json: task, status: :accepted
        else
            render json: {errors: "An error occured"}
        end
    end

    def update
        task = find_tasks
        task.update(task_params)
        render json: task, status: :accepted
    end

    def destroy
        task = find_tasks
        task.destroy
        head :no_content
    end

    private

    def find_tasks
        Task.find(params[:id])
    end

    def task_params
        params.permit(:task_name, :task_description, :task_status)
    end
end
