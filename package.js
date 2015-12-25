Package.describe({
  summary: "Material design icons from google",
  name:"planettraining:material-design-icons",
  version: "2.1.1",
  git:"https://github.com/planet-training/material-design-icons.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.addFiles([
    /* icon sprites */
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-alert.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-av.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-device.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-editor.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-file.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-hardware.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-maps.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-notification.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg'
  ], "client");
});
