'use strict';

var expect = require('chai').expect;
var sanitizeUrl = require('../js/sanitize_url').sanitizeUrl;
// var Files_Linkeditor = require('../js/filelist');

describe('filelist', function () {
  // var sandbox;

  // beforeEach(function() {
  //   // create a sandbox
  //   sandbox = sinon.sandbox.create();

  //   // stub some console methods
  //   sandbox.stub(window.console, "log");
  //   sandbox.stub(window.console, "error");
  // });

  // afterEach(function() {
  //   // restore the environment as it was before
  //   sandbox.restore();
  // });

  it('replaces javascript urls with about:blank', function () {
    expect(sanitizeUrl('javascript:alert(document.domain)')).to.equal('about:blank');
  });

  it('don\'t sanitize away percent signs in urls', function () {
    var url = 'http://example.org/7pe0o300%40group.calendar.com/public/basic.ics';
    expect(sanitizeUrl(url)).to.equal(url);
  });

  // it('converts a URL with percent signs in it correctly to URL file format', function () {
  //   var url = 'http://example.org/7pe0o300%40group.calendar.com/public/basic.ics';
  //   expect(Files_Linkeditor.generateURLFileContent('', url)).to.equal('[InternetShortcut]\r\nURL=' + url);
  // });
});