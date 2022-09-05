import { ClientTCP } from "./client-tcp";

const client = new ClientTCP({ host: "localhost", port: 5017 });

(async function main() {
  console.log("--> before send");
  const response = await client
    .send<unknown, { user: unknown }>(
      { cmd: "zigstore.cmd.product.search_recent_get" },
      {
        user: {
          _id: "63102e0d9e87c7379f9a1160",
          client: "61fd37e9e895e46c480f3465",
          taxi: {
            userId: 37247,
            accessToken: "b22822cd-5f29-4854-a9fc-a69e0c7ddb34",
            refreshToken: "bcf2ff75-c0e5-4bc8-829a-bc5110935d4d",
          },
          // roles: ["User"],
        },
      }
    )
    .catch((e) => console.log(e));
  console.log("--> after send");
  console.log(response);
})();
