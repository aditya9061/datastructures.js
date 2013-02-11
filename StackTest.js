/**
*
* Simple tests making sure Push, Pop, Size and Clear work as expected.
*
* @author Aidan Church (aidanchurch@gmail.com)
*
**/
var assert = require("assert");

var q = require("./Stack");

describe("Stack", function(){

    describe("#size()",function(){

	it("size should change as values are pushed and poped", function(){

	    var q = require("./Stack");

	    assert.equal(q.size(),0);

	    q.push(1);

	    assert.equal(q.size(),1);

	    q.push(4);

	    assert.equal(q.size(),2);

	    q.pop();

	    assert.equal(q.size(),1);

	    q.clear();

	});

     });

    describe("#pop()", function(){

	it("The stack should maintain the FILO principal", function(){

	    q.push(1);

	    q.push(2);

	    q.push(3);

	    assert.equal(q.pop(), 3);

	    assert.equal(q.pop(), 2);

	    q.enqueue(4);

	    assert.equal(q.pop(), 4);

	    q.clear();

	});

    });

});

