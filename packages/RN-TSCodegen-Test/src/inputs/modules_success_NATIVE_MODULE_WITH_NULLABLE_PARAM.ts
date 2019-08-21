import {ReactNull} from '../lib/CodegenTypes';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';




export interface Spec extends TurboModule {
  // Exported methods.
  voidFunc (arg: ReactNull | string) : void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');
