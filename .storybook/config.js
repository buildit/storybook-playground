import { configure, setAddon, addDecorator } from '@storybook/react';
import addWithInfo from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import chapters from '@storybook/addon-chapters';

setAddon(addWithInfo);

addDecorator(withKnobs);

function loadStories() {
  require('../stories/story');
}

configure(loadStories, module);
