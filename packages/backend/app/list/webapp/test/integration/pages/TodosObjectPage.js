sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'fe.gen.list',
            componentId: 'TodosObjectPage',
            entitySet: 'Todos'
        },
        CustomPageDefinitions
    );
});