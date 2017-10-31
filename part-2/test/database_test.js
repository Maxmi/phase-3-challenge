const expect = require('chai').expect;
const pg = require('pg-promise')();

const {
  getItemsFromSection,
  getAllOrders,
  realShoppers
} = require('../db/database');

describe('db queries', function() {
  describe('getItemsFromSection', function() {
    it('should return 5 rows for section meat', function(done) {
      getItemsFromSection('meat')
        .then(function(data) {
        expect(data.length).to.equal(5);
        done();
      })
    })
  });
  describe('getAllOrders', function() {
    it('should return 3 rows for shopper with id 1', function(done) {
      getAllOrders(1)
        .then(function(data) {
        expect(data.length).to.equal(3);
        done();
      })
    });
    it('should return no results for shopper with id 4', function(done) {
      getAllOrders(4)
        .then(function(data) {
        expect(data.length).to.equal(0);
        done();
      })
    });
  });
  describe('real shoppers', function() {
    it('should return list of shoppers who made at least 1 order', function(done) {
      realShoppers()
        .then(function(data) {
          expect(data.length).to.equal(4);
          done();
        })
    })
  })
}); //end of most outer describe