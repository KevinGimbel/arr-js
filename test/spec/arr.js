describe("arr-js", function() {

  var simpleArray = [0,1,2,3];
  var simpleEvenArray = [0,2];

  describe("first", function() {
    it("should return the first element if no or invalid number is passed", function() {
      expect(simpleArray.first()).toEqual(simpleArray[0]);
      expect(simpleArray.first('invalid')).toEqual(simpleArray[0]);
      expect(simpleArray.first(1.1)).toEqual(simpleArray[0]);
      expect(simpleArray.first(-1)).toEqual(simpleArray[0]);
      expect(simpleArray.first(simpleArray.length+1)).toEqual(simpleArray[0]);
    });

    it("should return the first n elements if a valid number is passed", function() {
      expect(simpleArray.first(2)).toEqual([0,1]);
      expect(simpleArray.first(simpleArray.length)).toEqual(simpleArray);
    });
  });

  describe("last", function() {
    it("should return the last element if no or invalid number is passed", function() {
      expect(simpleArray.last()).toEqual(simpleArray[simpleArray.length-1]);
      expect(simpleArray.last('invalid')).toEqual(simpleArray[simpleArray.length-1]);
      expect(simpleArray.last(1.1)).toEqual(simpleArray[simpleArray.length-1]);
      expect(simpleArray.last(-1)).toEqual(simpleArray[simpleArray.length-1]);
      expect(simpleArray.last(simpleArray.length+1)).toEqual(simpleArray[simpleArray.length-1]);
    });    
    it("should return the last n elements if a valid number is passed", function() {
      expect(simpleArray.last(2)).toEqual([2,3]);
      expect(simpleArray.last(simpleArray.length)).toEqual(simpleArray);
    });
  });

  describe("size", function() {
    it("should return the size", function() {
      expect(simpleArray.size()).toEqual(3);
    });
  });

  describe("filter", function() {
    it("should filter all elements based on always false condition", function() {
      expect(simpleArray.filter(function(){return false;})).toEqual([]);
    });
    it("should filter no elements based on always true condition", function() {
      expect(simpleArray.filter(function(){return true;})).toEqual(simpleArray);      
    });
    it("should filter all even numbers", function() {
      expect(simpleArray.filter(function(item){return item%2==0;})).toEqual(simpleEvenArray);
    });
  });

});
