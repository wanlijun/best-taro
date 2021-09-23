// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/home/lijunwan/caicai/project/best/best-taro/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/home/lijunwan/caicai/project/best/best-taro/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/home/lijunwan/caicai/project/best/best-taro/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/home/lijunwan/caicai/project/best/best-taro/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/home/lijunwan/caicai/project/best/best-taro/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('../../index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/index.md",
          "updatedTime": 1632388789806,
          "slugs": [
            {
              "depth": 1,
              "value": "Hello dumi!",
              "heading": "hello-dumi"
            }
          ],
          "title": "Hello dumi!"
        },
        "title": "Hello dumi!"
      }
    ],
    "title": "best-taro",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
