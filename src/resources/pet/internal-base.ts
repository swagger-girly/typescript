// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { path } from '../../internal/utils/path';
import * as PetAPI from './pet';
import { HelloWorldTestingggg } from '../../client';
import { EventEmitter } from '../../core/EventEmitter';
import { HelloWorldTestinggggError } from '../../core/error';

import type { RawWebSocketData, ReconnectingEvent, UnsentMessage } from '../../internal/ws';
import { PetWSParameters } from './ws-base';

export type PetStreamMessage =
  | { type: 'connecting' | 'open' | 'closing' }
  | { type: 'close'; code: number; reason: string; unsent: UnsentMessage<PetAPI.ConnectClientEvent>[] }
  | { type: 'reconnecting'; reconnect: ReconnectingEvent<PetWSParameters> }
  | { type: 'reconnected' }
  | { type: 'message'; message: PetAPI.ConnectServerEvent }
  | { type: 'raw'; data: RawWebSocketData }
  | { type: 'error'; error: WebSocketError };

export class WebSocketError extends HelloWorldTestinggggError {
  /**
   * The error data that the API sent back in an error event.
   */
  error?: unknown | undefined;

  constructor(message: string, event: unknown | null) {
    super(message);

    this.error = event ?? undefined;
  }
}

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};

type WebSocketEvents = Simplify<
  {
    event: (event: PetAPI.ConnectServerEvent) => void;
    raw: (data: RawWebSocketData) => void;
    error: (error: WebSocketError) => void;
    close: (code: number, reason: string, unsent: UnsentMessage<PetAPI.ConnectClientEvent>[]) => void;
    reconnecting: (event: ReconnectingEvent<PetWSParameters>) => void;
    reconnected: () => void;
  } & {
    [EventType in PetAPI.ConnectServerEvent['type']]: (
      event: Extract<PetAPI.ConnectServerEvent, { type?: EventType }>,
    ) => unknown;
  }
>;

export abstract class PetEmitter extends EventEmitter<WebSocketEvents> {
  /**
   * Send an event to the API.
   */
  abstract send(event: PetAPI.ConnectClientEvent): void;

  /**
   * Send raw data over the WebSocket without JSON serialization.
   */
  abstract sendRaw(data: RawWebSocketData): void;

  /**
   * Close the WebSocket connection.
   */
  abstract close(props?: { code: number; reason: string }): void;

  protected _onError(event: null, message: string, cause: any): void;
  protected _onError(event: unknown, message?: string | undefined): void;
  protected _onError(event: unknown | null, message?: string | undefined, cause?: any): void {
    message = message ?? safeJSONStringify(event) ?? 'unknown error';

    if (!this._hasListener('error')) {
      const error = new WebSocketError(
        message +
          `\n\nTo resolve these unhandled rejection errors you should bind an \`error\` callback, e.g. \`ws.on('error', (error) => ...)\` `,
        event,
      );
      // @ts-ignore
      error.cause = cause;
      Promise.reject(error);
      return;
    }

    const error = new WebSocketError(message, event);
    // @ts-ignore
    error.cause = cause;

    this._emit('error', error);
  }
}

export function buildURL(client: HelloWorldTestingggg, parameters: Record<string, unknown>): URL {
  const { petId: petID, ...query } = parameters;
  const endpoint = path`/pet/${petID}/events/stream`;
  const url = new URL(client.buildURL(endpoint, query, undefined));
  url.protocol = url.protocol === 'http:' || url.protocol === 'ws:' ? 'ws:' : 'wss:';
  return url;
}

function safeJSONStringify(value: unknown): string | null {
  try {
    return JSON.stringify(value);
  } catch {
    return null;
  }
}
