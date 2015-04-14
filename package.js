Package.describe({
  summary: "Material design icons from google",
  name:"planettraining:material-design-icons",
  version: "0.0.1"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.addFiles([
    /* icon sprites */
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg'
  ], "client");
});