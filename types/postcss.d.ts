declare module 'postcss-px-to-viewport-8-plugin' {
  import { PluginCreator } from 'postcss';
  import { IPx2VwOptions } from 'types/options';

  const px2vw: PluginCreator<IPx2VwOptions>;

  export = px2vw;
}
