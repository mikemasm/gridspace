import { storiesOf } from '@storybook/html';
import Component from './index.html';
import { withRunScript } from 'storybook-addon-run-script/html';
import runScript from './sample.runscript.js';
storiesOf('Sample Story', module)
  .addDecorator(withRunScript(runScript))
  .add('default', () => Component);