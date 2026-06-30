// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BrowserWebSocket } from '../../internal/ws-adapter-browser';
import { PetWSBase, type PetWSBaseOptions, type PetWSParameters } from './ws-base';
import { HelloWorldTestingggg } from '../../client';

export type { PetWSParameters, PetWSReconnectOptions, PetWSBaseOptions } from './ws-base';

export interface PetWSBrowserOptions extends PetWSBaseOptions {
  /** WebSocket sub-protocols to pass to the browser WebSocket constructor. */
  protocols?: string | string[];
}

// Minimal type declaration for browser WebSocket constructor.
declare const WebSocket: {
  new (url: string, protocols?: string | string[]): any;
};

export class PetWS extends PetWSBase<BrowserWebSocket> {
  private _protocols: string | string[] | undefined;

  constructor(
    client: HelloWorldTestingggg,
    parameters: PetWSParameters,
    options?: PetWSBrowserOptions | null | undefined,
  ) {
    if (typeof (globalThis as any).WebSocket === 'undefined') {
      throw new Error(
        'PetWS from "hello-world-testingggg/resources/pet/ws-browser" requires a browser environment with native WebSocket support. ' +
          'Try using the server side version instead: `import { PetWS } from "hello-world-testingggg/resources/pet/ws"`',
      );
    }

    const { reconnect, maxQueueSize, protocols } = options ?? {};
    super(client, parameters, { reconnect, maxQueueSize });
    this._protocols = protocols;
    this._connectInitial();
  }

  protected _createSocket(url: URL, _authHeaders: Record<string, string>): BrowserWebSocket {
    // Browser WebSocket does not support custom headers; auth headers are ignored.
    const ws = new WebSocket(url.toString(), this._protocols);
    return new BrowserWebSocket(ws);
  }
}
