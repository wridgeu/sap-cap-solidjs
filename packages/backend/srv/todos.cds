using {db.todos as db} from '../db/schema';

/**
 * Does not make much sense now to have "admin", interesting to see it though.
 * improvable by https://cap.cloud.sap/docs/guides/authorization#dedicated-services
 * also see https://cap.cloud.sap/docs/node.js/authentication#enforcement
 */
service TodoService /*@(requires: 'authenticated-user') */{
  entity Todos @(restrict: [
    { grant: 'READ' },
    { grant: 'WRITE', to: 'admin' }
  ]) as projection on db.Todos
}
