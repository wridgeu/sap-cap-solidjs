using {
    cuid,
    managed
} from '@sap/cds/common';

namespace db.todos;

entity Todos : cuid, managed {
    title     : String;
    completed : Boolean;
}
