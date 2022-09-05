export class Serializer {
  // NESTJS default delimiter is '#'
  private readonly delimiter: string = "#";

  public serialize(data: Record<string, unknown>): Uint8Array | string {
    const message = JSON.stringify(data);
    return message.length + this.delimiter + message;
  }

  public deserialize<T = unknown>(buffer: Uint8Array | string): T {
    const message = buffer.toString();
    const [, data] = message.split(this.delimiter);
    return JSON.parse(data);
  }
}
