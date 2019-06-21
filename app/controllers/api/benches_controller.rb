class Api::BenchesController < ApplicationController
    def index
        # @benches = Bench.all
        debugger
        @benches = Bench.in_bounds(params[:filters])
        render :index
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render json: @bench
        else
            render json: @bench.errors.full_messages, status: 401
        end
    end

    def bench_params
        params.require(:bench).permit(:description, :lat, :lng)
    end
end

# {
#     "northEast": {"lat":37.80971, "lng":-122.39208},
#     "southWest": {"lat":37.74187, "lng":-122.47791}
#   }