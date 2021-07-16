import { SiteClient } from "datocms-client";

export default async function requestReceiver(request, response) {
  if (request.method === "POST") {
    const TOKEN = process.env.DATO_TOKEN;
    const client = new SiteClient(TOKEN);

    const record = await client.items.create({
      itemType: "968427",
      ...request.body,
    });

    response.json({
      dados: "Algum dado qualquer",
      record: record,
    });

    return;
  }

  response.status(404).json({
    message:
      "Desculpe, mas esta rota funciona apenas para requisições do tipo POST",
  });
}
