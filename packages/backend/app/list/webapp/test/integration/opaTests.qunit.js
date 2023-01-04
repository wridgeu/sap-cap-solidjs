sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fe/gen/list/test/integration/FirstJourney',
		'fe/gen/list/test/integration/pages/TodosList',
		'fe/gen/list/test/integration/pages/TodosObjectPage'
    ],
    function(JourneyRunner, opaJourney, TodosList, TodosObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fe/gen/list') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTodosList: TodosList,
					onTheTodosObjectPage: TodosObjectPage
                }
            },
            opaJourney.run
        );
    }
);