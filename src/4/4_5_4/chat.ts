export type Connection = {
  connect(): void;
  disconnect(): void;
};

export function createEncryptedConnection(roomId: string): Connection {
  return {
    connect() {
      console.log(`✅ 🔐 Connecting to "${roomId}... (encrypted)`);
    },
    disconnect() {
      console.log(`❌ 🔐 Disconnected from "${roomId}" room (encrypted)`);
    },
  };
}

export function createUnencryptedConnection(roomId: string): Connection {
  return {
    connect() {
      console.log(`✅ Connecting to "${roomId}... (unencrypted)`);
    },
    disconnect() {
      console.log(`❌ Disconnected from "${roomId}" room (unencrypted)`);
    },
  };
}