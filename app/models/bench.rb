class Bench < ApplicationRecord
    validates :lat, :lng, presence: true

    def self.in_bounds(bounds)
        benches = Bench.all
        ret_benches = []
        debugger
        benches.each do |bench|
            if bench.lat <= bounds['northEast'].lat && bench.lat >= bounds['southWest'].lat
                if bench.lng <= bounds['northEast'].lng && bench.lng >= bounds['southWest'].lng
                    ret_benches << bench
                end
            end
        end
        return ret_benches
    end
end
