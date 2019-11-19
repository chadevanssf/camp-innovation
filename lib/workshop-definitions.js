var launcher = process.env.LAUNCHER || 'https://hosted-scratch.herokuapp.com/launch?template=';
var launcher_pre = process.env.LAUNCHER_PRE || 'https://deployer-prerelease.herokuapp.com/launch?template=';
var plat_launcher = process.env.LAUNCHER || 'https://platform-sfdx-deploy.herokuapp.com/launch?template=';

const workshops = [
  {
    shortname: 'tempconv',
    name: 'Temperature Conversion',
    description: 'A simple temperature converter that can be used to show how to leverage LWC as common resources to share across components.',
    docsURL: 'https://salesforce.quip.com/2KIEAzVqoasb',
    launchURL: 'https://developer.salesforce.com/docs/component-library/tools/playground/AL2Nmp_4u/19/edit',
    imageURL: '../images/tdx19/TemperatureConverter.png',
  },

  {
    shortname: 'todolist',
    name: 'Todo List',
    description: 'A simple Todo list that can be used to show how to leverage LWC to display a custom list of data.',
    docsURL: 'https://salesforce.quip.com/GCWYA07AD8aD',
    launchURL: 'https://developer.salesforce.com/docs/component-library/tools/playground/eJp_KybFb/8/edit',
    imageURL: '../images/tdx19/TodoList.png',
  },

  {
    shortname: 'carousel',
    name: 'Image Carousel',
    description: 'A simple image carousel to show how to incorporate complex base LWC components to create an Experience LWC.',
    docsURL: 'https://salesforce.quip.com/YMVaA6ASqr0C',
    launchURL: 'https://developer.salesforce.com/docs/component-library/tools/playground/f2tHkMxJM/6/edit',
    imageURL: '../images/tdx19/ImageCarousel.png',
  },

  {
    shortname: 'basichc',
    name: 'Health Cloud Basic',
    description: 'Start from a fresh, out of the box Health Cloud installation for a workshop.',
    launchURL: plat_launcher + 'https://github.com/Vchalem/Health-Cloud---ADK',
    docsURL: 'https://salesforce.quip.com/DsKRAZg9MRNn'
  },

  {
    shortname: 'rxmanager',
    name: 'Rx Manager - for Alexa',
    description: 'Rx Manager for Alexa, using Heroku and HelloViolet.ai',
    launchURL: plat_launcher + 'https://github.com/chadevanssf/rx-manager-lightning-platform',
    docsURL: '#'
  },

  {
    shortname: 'allonboard',
    name: 'All On Board',
    description: 'A Flow Template from AppExchange that shows how you can create complex flows. This example is an on-boarding sample flow.',
    docsURL: 'https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FMiQpUAL',
    launchURL: launcher + 'https://github.com/chadevanssf/df19-flow-allonboard',
    imageURL: '../images/df19/AllOnBoard.png',
  },

  {
    shortname: 'consentcapture',
    name: 'Consent Capture',
    description: 'A Flow Template from AppExchange that shows how you can create complex flows. This example shows how you can capture consent using standard objects for this purpose.',
    docsURL: 'https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FMiVQUA1',
    launchURL: launcher + 'https://github.com/chadevanssf/df19-flow-consentcapture',
    imageURL: '../images/df19/ConsentCapture.png',
  },

  {
    shortname: 'changemanagement',
    name: 'Change Management at Login',
    description: 'A Flow Template from AppExchange that shows how you can create complex flows. This example shows how to capture data from users when they login.',
    docsURL: 'https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FMiG0UAL',
    launchURL: launcher + 'https://github.com/chadevanssf/df19-flow-changemanagement',
    imageURL: '../images/df19/ChangeManagement.png',
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
    'carousel',
    'todolist',
    'tempconv',
  ],
  main_layout: "lwc",

  tdx19: [
    'carousel',
    'todolist',
    'tempconv',
  ],
  tdx19_layout: "lwc",

  healthcloud:[
    'basichc',
    'rxmanager',
  ],
  healthcloud_layout: "healthcloud",

  platform:[
    'rxmanager',
  ],
  platform_layout: "demos",

  df19:[
    'allonboard',
    'consentcapture',
    'changemanagement',
  ],
  df19_layout: "ci",

};
