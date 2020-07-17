const assert = require("assert");
const { iteratee } = require("underscore");
const proxyquire = require("proxyquire").noCallThru();

const fakeData = proxyquire("../index.js", {
  "./data/userdata.json": ["one", "two"],
});

describe("fakeData names method", function () {
  it("gives us back one name if we pass in one", function () {
    let name = fakeData.emails(1);
    assert(name == "one" || name == "two");
  });
});
