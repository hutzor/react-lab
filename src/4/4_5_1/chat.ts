export type Connection = {
  connect(): void;
  disconnect(): void;
};

export function createConnection(serverUrl: string, roomId: string): Connection {
  return {
    connect() {
      console.log(`✅ Connecting to "${roomId}" room at ${serverUrl}...`);
    },
    disconnect() {
      console.log(`❌ Disconnected from "${roomId}" room at ${serverUrl}`);
    },
  };
}