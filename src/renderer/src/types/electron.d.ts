export{}

declare global {
  interface Window {
    api: {
        postMessage(texto: string): Promise<Message[]>;
        sendMessage(message: string):  void;
    };
  }
}