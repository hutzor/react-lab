export type Connection = {
  connect(): void;
  disconnect(): void;
};

export type Options = {
  serverUrl: string;
  roomId: string;
};

export function createConnection({ serverUrl, roomId }: Options): Connection {
  return {
    connect() {
      console.log(`✅ Connecting to "${roomId}" room at ${serverUrl}...`);
    },
    disconnect() {
      console.log(`❌ Disconnected from "${roomId}" room at ${serverUrl}`);
    },
  };
}