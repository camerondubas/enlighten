'use strict';

function Webhooks($resource) {
  let url = `/api/v1/webhooks/:id`;
  let params = {id: '@id'};
  let actions = {
    get: {method: 'GET', withCredentials: true, cache: false},
    save: {method: 'POST', withCredentials: true},
    query: {method: 'GET', withCredentials: true, cache: false, isArray: true},
    remove: {method: 'DELETE', withCredentials: true},
    delete: {method: 'DELETE', withCredentials: true}
  };

  var Webhooks = $resource(url, params, actions);

  return Webhooks;
}

Webhooks.$inject = ['$resource'];
export default Webhooks;
