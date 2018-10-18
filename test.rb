# Start of test
How would you (in a controller method) assign to @country the Country named ‘France’?
How would you assign to @cities an Array of all the cities in France?
How would you assign to @bars an Array of all the bars in France?
How would you assign to @directory an Array of the names of all the bars in France, sorted?
Do any of the above answer change if there are 400 cities? Why or why not?
How about if there are 20,000 bars? Why or why not?
# end of test

class Country < ActiveRecord::Base
  has_many :cities
end

class City < ActiveRecord::Base
  belongs_to :country
  has_many :bars
end

class Bar < ActiveRecord::Base
  belongs_to :city
end


#assigns country to france
@country = Country.new(name: "France")

#assigns to @cities an Array of all the cities in France
@country = Country.find(name: "France")
@cities = @country.cities.all

#assigns @bars an Array of all the bars in France
@city = City.find(name: "France")
@bars = @city.bars.all

#assigns to @directory an Array of the names of all the bars in France, sorted
@directory = 
