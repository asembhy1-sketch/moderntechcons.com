import React from "react";
import * as jsxRuntime from "react/jsx-runtime";
import * as jsxDevRuntime from "react/jsx-dev-runtime";
import FiberDebugger from "./fibber-debugger";

export const DEBUG_ERROR_KEY = "debugError";

export function interceptReactJSX() {
  // 保存原始函数
  const originalCreateElement = React.createElement;
  const originalJsx = (jsxRuntime as any).jsx;
  const originalJsxs = (jsxRuntime as any).jsxs;
  const originalJsxDEV = (jsxDevRuntime as any).jsxDEV;

  const createElementDebugError = () => {
    const error = new Error();
    return () => error;
  };

  // 劫持 React.createElement
  (React as any).createElement = function (...args: [any, any?, ...any[]]) {
    args[1] = {
      ...(args[1] || {}),
      [DEBUG_ERROR_KEY]: createElementDebugError(),
    };
    return originalCreateElement(...args);
  };

  // 劫持 jsx
  (jsxRuntime as any).jsx = function (...args: [any, any]) {
    args[1] = {
      ...(args[1] || {}),
      [DEBUG_ERROR_KEY]: createElementDebugError(),
    };
    return originalJsx(...args);
  };

  // 劫持 jsxs
  (jsxRuntime as any).jsxs = function (...args: any[]) {
    args[1] = {
      ...(args[1] || {}),
      [DEBUG_ERROR_KEY]: createElementDebugError(),
    };
    return originalJsxs(...args);
  };

  // 劫持 jsxDEV
  if (originalJsxDEV) {
    (jsxDevRuntime as any).jsxDEV = function (...args: any[]) {
      args[1] = {
        ...(args[1] || {}),
        [DEBUG_ERROR_KEY]: createElementDebugError(),
      };
      return originalJsxDEV(...args);
    };
  }
}

export function getDebugErrorFromSelector(selector: string) {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) {
    return null;
  }
  const fiber = FiberDebugger.getFiberFromDOMNode(element);
  const debugError = fiber?.memoizedProps?.[DEBUG_ERROR_KEY]?.();
  if (debugError) {
    return {
      element,
      debugError,
    };
  }
  return null;
}
