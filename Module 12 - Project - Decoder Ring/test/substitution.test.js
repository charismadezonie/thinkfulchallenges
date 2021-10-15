// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");
const substitution = require("../src/substitution");

// Each of the following tests satisfies a passing requirement
describe('substitution', () => {
  it('should return false if alphabet length is not 26', () => {
    actual = substitutionModule.substitution('hailstate', 'oyqmcgrukswaflnthdjpzibev');
    expect(actual).to.equal(false);
  });
  it('should correctly decode given phrase', () => {
    actual = substitutionModule.substitution('rxuwdjxjm', 'xoyqmcgrukswaflnthdjpzibev', false);
    expect(actual).to.equal('hailstate')
  });
  it('should return false if duplicate characters exist in alphabet', () => {
    actual = substitutionModule.substitution("hailstate", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(false);
  });
  it('should maintain spaces', () => {
    actual = substitutionModule.substitution('rxuw djxjm', 'xoyqmcgrukswaflnthdjpzibev', false);
    expect(actual).to.equal('hail state')
  });
  it('should ignore capital letters', () => {
    actual = substitutionModule.substitution('HailState', 'xoyqmcgrukswaflnthdjpzibev');
    expect(actual).to.equal('rxuwdjxjm')
  });
})