const workshops = [
  {
    shortname: 'tempconv',
    name: 'Temperature Conversion',
    description: 'A simple temperature converter that can be used to show how to leverage LWC as common resources to share across components.',
    docsURL: 'https://salesforce.quip.com/2KIEAzVqoasb',
    launchURL: 'https://developer.salesforce.com/docs/component-library/tools/playground/AL2Nmp_4u/17/edit',
  },

  {
    shortname: 'todolist',
    name: 'Todo List',
    description: 'A simple Todo list that can be used to show how to leverage LWC to display a custom list of data.',
    docsURL: 'https://salesforce.quip.com/GCWYA07AD8aD',
    launchURL: 'https://developer.salesforce.com/docs/component-library/tools/playground/eJp_KybFb/7/edit',
  },

];

module.exports = {
  getDefs: nameList => {
    const output = [];

    nameList.forEach(name => {
      try {
        const found = workshops.find(workshop => workshop.shortname === name);
        if (found) {
          output.push(found);
        } else {
          console.log(`not found: ${name}`);
        }
      } catch (err) {
        console.log(err);
      }
    });

    return output;
  },

  main: [
    'tempconv',
    'todolist',
  ],

  tdx19: [
    'tempconv',
    'todolist',
  ],
};
