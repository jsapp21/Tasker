class NotesController < ApplicationController

    def index
        notes = Note.all

        render json: notes
    end

    def create
        note = Note.create(title: params[:title], content: params[:content], user_id: params[:userId], priority: params[:priority], due_date: params[:due_date])

        render json: note
    end

    def update
        note = Note.find_by(id: params[:id])
    
        note.update(title: params[:title], content: params[:content], priority: params[:priority], due_date: params[:due_date])

        render json: note
    end

    def destroy
        note = Note.find_by(id: params[:id])
        note.destroy

        render json: note
    end

    def complete
        note = Note.find_by(id: params[:id])
        note.update(complete: params[:complete])
        
        render json: note
    end

end
