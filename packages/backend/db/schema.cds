using {
    cuid,
    managed
} from '@sap/cds/common';

namespace db.todos;

annotate cuid with {
    ID @title: '{i18n>ID}';
}

entity Todos : cuid, managed {
    @title: '{i18n>Title}'
    title     : String;

    @title: '{i18n>Completed}'
    completed : Boolean default false not null;
}
