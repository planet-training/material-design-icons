Package.describe({
  summary: "Material design icons from google",
  name:"planettraining:material-design-icons",
  version: "2.2.3",
  git:"https://github.com/planet-training/material-design-icons.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.addAssets([
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-av.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-device.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-hardware-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-maps.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-places-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-editor-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-hardware.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-places.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-alert-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-editor.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-alert.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-file-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-notification-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-av-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-file.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-maps-symbol.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-notification.svg',
    'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle-symbol.svg'
], "client");
});
