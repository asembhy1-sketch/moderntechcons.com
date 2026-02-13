/**
 * React Fiber 调试工具
 * 用于获取和分析 React 内部 Fiber 节点信息
 */

interface FiberNode {
  return: FiberNode | null;
  child: FiberNode | null;
  sibling: FiberNode | null;
  type: any;
  key: string | null;
  elementType: any;
  stateNode: any;
  _debugSource?: {
    fileName: string;
    lineNumber: number;
    columnNumber: number;
  };
  _debugOwner?: FiberNode;
  tag: number;
  memoizedProps?: any;
  memoizedState?: any;
  _debugStack?: Error;
}

export interface DebugInfo {
  fileName: string;
  lineNumber: number;
  columnNumber: number;
  componentName: string;
  componentType: string;
}

export class FiberDebugger {
  /**
   * 从 DOM 元素获取 Fiber 节点
   * React 会在 DOM 元素上存储内部 Fiber 节点的引用
   */
  static getFiberFromDOMNode(element: HTMLElement): FiberNode | null {
    if (!element) return null;

    // 查找 React 内部属性
    const key = Object.keys(element).find(
      (key) =>
        key.startsWith("__reactFiber$") ||
        key.startsWith("__reactInternalInstance$")
    );

    return key ? (element as any)[key] : null;
  }
}

export default FiberDebugger;
