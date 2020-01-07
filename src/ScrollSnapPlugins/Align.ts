import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
import createUtilityPlugin from '../Plugins/UtilityPlugin';

export default function(helpers: TailwindPluginHelpers) {
  createUtilityPlugin('scrollSnapAlign', {
    'snap-start': 'start',
    'snap-end': 'end',
    'snap-center': 'center',
  }, helpers);
}
