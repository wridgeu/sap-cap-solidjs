/**
 * Based on: https://cap.cloud.sap/docs/guides/authorization#separation-of-concerns
 */
using TodoService from './todos';

// annotate TodoService with @(requires: 'authenticated-user');

annotate TodoService.Todos with @(restrict: [
    {grant: 'READ'},
    {
        grant: 'WRITE',
        to   : 'admin'
    }
]);
