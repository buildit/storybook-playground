import React from 'react';
import { configure, setAddon, addDecorator } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import { withComments } from '@buildit/storybook-addon-blabbr';
import { withVersions } from '@buildit/storybook-addon-versions';
import InfoAddon from '@kadira/react-storybook-addon-info';

setAddon(InfoAddon);

addDecorator(withKnobs);
addDecorator(withComments);
addDecorator(withVersions);
addDecorator((story) => (
	<div style={{padding: '10px'}}>
		{story()}
	</div>
));

function loadStories() {
  require('../stories/story');
}

configure(loadStories, module);
