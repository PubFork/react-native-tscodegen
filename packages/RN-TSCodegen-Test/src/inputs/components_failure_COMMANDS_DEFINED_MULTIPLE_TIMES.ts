import {Int32} from '../lib/CodegenTypes';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';





import {ViewProps} from '../lib/ViewPropTypes';


interface NativeCommands {
  hotspotUpdate (viewRef: React.Ref<'RCTView'>, x: Int32, y: Int32) : void;
}

export type ModuleProps = Readonly<ViewProps & {
  // No props or events
}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['hotspotUpdate'];
});
export const Commands2 = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['hotspotUpdate'];
});

export default (codegenNativeComponent<ModuleProps>(
  'Module',
) as NativeComponent<ModuleProps>);