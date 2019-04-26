'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('simple validate test', () => {
  it('should return false for null string', () => {
    var result = index.lowerCase(null);
    expect(result).to.equal("");
  });
  it('should return false for undefined string', () => {
    var result = index.lowerCase(undefined);
    expect(result).to.equal("");
  });
  it('should return false for empty string', () => {
    var result = index.lowerCase("");
    expect(result).to.equal("");
  });
  it('should return false for whitespace string', () => {
    var result = index.lowerCase(" ");
    expect(result).to.equal("");
  });
  it('should return false for non-empty string', () => {
    var result = index.lowerCase("test");
    expect(result).to.equal("test");
  });
  //----------------------------------------
  it('should return false for null string', () => {
    var result = index.upperCase(null);
    expect(result).to.equal("");
  });
  it('should return false for undefined string', () => {
    var result = index.upperCase(undefined);
    expect(result).to.equal("");
  });
  it('should return false for empty string', () => {
    var result = index.upperCase("");
    expect(result).to.equal("");
  });
  it('should return false for whitespace string', () => {
    var result = index.upperCase(" ");
    expect(result).to.equal("");
  });
  it('should return false for non-empty string', () => {
    var result = index.upperCase("test");
    expect(result).to.equal("TEST");
  });
  //----------------------------------------
  it('should return false for null string', () => {
    var result = index.convertString(null);
    expect(result).to.equal("");
  });
  it('should return false for undefined string', () => {
    var result = index.convertString(undefined);
    expect(result).to.equal("");
  });
  it('should return false for empty string', () => {
    var result = index.convertString("");
    expect(result).to.equal("");
  });
  it('should return false for whitespace string', () => {
    var result = index.convertString(" ");
    expect(result).to.equal("");
  });
  it('should return false for non-empty string', () => {
    var result = index.convertString("test");
    expect(result).to.equal("test");
  });
  //----------------------------------------
  it('should return false for null string', () => {
    var result = index.urlSlug(null);
    expect(result).to.equal("");
  });
  it('should return false for undefined string', () => {
    var result = index.urlSlug(undefined);
    expect(result).to.equal("");
  });
  it('should return false for empty string', () => {
    var result = index.urlSlug("");
    expect(result).to.equal("");
  });
  it('should return false for whitespace string', () => {
    var result = index.urlSlug(" ");
    expect(result).to.equal("");
  });
  it('should return false for non-empty string', () => {
    var result = index.urlSlug("test");
    expect(result).to.equal("test");
  });
  //----------------------------------------
  it('should return false for null string', () => {
    var result = index.urlSlugUnqiue(null);
    expect(result).to.equal("");
  });
  it('should return false for undefined string', () => {
    var result = index.urlSlugUnqiue(undefined);
    expect(result).to.equal("");
  });
  it('should return false for empty string', () => {
    var result = index.urlSlugUnqiue("");
    expect(result).to.equal("");
  });
  it('should return false for whitespace string', () => {
    var result = index.urlSlugUnqiue("");
    expect(result).to.equal("");
  });
  it('should return false for non-empty string', () => {
    var result = index.urlSlugUnqiue("test");
    var timestamp = Math.round((new Date()).getTime());
    expect(result).to.equal("test-"+timestamp);
  });
});
