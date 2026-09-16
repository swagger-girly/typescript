// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as WS from 'ws';
import { NodeWebSocket } from '../../internal/ws-adapter-node';
import { PetWSBase, type PetWSBaseOptions, type PetWSParameters } from './ws-base';
import { HelloWorldTestingggg } from '../../client';

export type { PetWSParameters, PetWSReconnectOptions } from './ws-base';

export interface PetWSClientOptions extends WS.ClientOptions, PetWSBaseOptions {}

export class PetWS extends PetWSBase<NodeWebSocket> {
  private _wsOptions: WS.ClientOptions | null | undefined;

  constructor(
    client: HelloWorldTestingggg,
    parameters: PetWSParameters,
    options?: PetWSClientOptions | null | undefined,
  ) {
    if (!WS?.WebSocket) {
      throw new Error(
        'PetWS from "hello-world-testingggg/resources/pet/ws" requires the "ws" package but it could not be loaded. If you wish to use this from a browser, try `import { PetWS } from "hello-world-testingggg/resources/pet/ws-browser"`',
      );
    }

    const { reconnect, maxQueueSize, ...wsOptions } = options ?? {};
    super(client, parameters, { reconnect, maxQueueSize });
    this._wsOptions = wsOptions;
    this._connectInitial();
  }

  protected _createSocket(url: URL, authHeaders: Record<string, string>): NodeWebSocket {
    const ws = new WS.WebSocket(url, {
      ...this._wsOptions,
      headers: {
        ...authHeaders,
        ...this._wsOptions?.headers,
      },
    });
    return new NodeWebSocket(ws);
  }
}
