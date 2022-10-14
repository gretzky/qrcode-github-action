const QRCode = require("qrcode");

async function main() {
  const result = await QRCode.toDataURL("i am a pony");

  console.log(result);
}

main();
