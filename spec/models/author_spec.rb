require 'rails_helper'


describe Author do 
 it "must be in downcase" do
    author = Author.find_by("EWERTON")
    assert_equal(author[:name], "ewerton")
 end
end