'use strict';

var request = require('request');
var debug = require('debug')('proxy');
var prefix;

module.exports.proxy = function proxy(req, res, next) {

  if (!prefix) { prefix = new RegExp('^' + req.swagger.apiPath); }

  var basePath = req.a127.config('proxyBase');
  var subPath = req.url.replace(prefix, '');
  var proxyUrl = basePath + subPath;

  debug('proxying to: %s', proxyUrl);

  req.pipe(request(proxyUrl)).pipe(res);
};
