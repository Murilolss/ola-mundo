export{}

declare global {
  interface Window {
    api: {
        sendMessage(message: string):  void;
    };
  }
}