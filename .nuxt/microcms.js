"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microcms_js_sdk_1 = require("microcms-js-sdk");
const plugin = function (_, inject) {
    const _options = JSON.parse('{"serviceDomain":"conditionyellow","apiKey":"1834e7af205d486994be3447af91fbac50b0"}');
    const client = microcms_js_sdk_1.createClient(_options);
    inject('microcms', client);
};
exports.default = plugin;
