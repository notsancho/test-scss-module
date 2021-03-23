// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, addLessLoader, useEslintRc, addBundleVisualizer, adjustWorkbox } = require('customize-cra');

module.exports = override(
  addLessLoader(),
  useEslintRc('.eslintrc.js'),
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
  adjustWorkbox((wb) =>
    Object.assign(wb, {
      skipWaiting: false,
      importWorkboxFrom: 'local',
    }),
  ),
);
