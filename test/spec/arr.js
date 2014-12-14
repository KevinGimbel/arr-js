describe("arr-js", function() {

  var simpleArray = [0,1,2,3];

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
});
