const QRCode = require("qrcode");

async function main() {
  const str =
    "https://expo.dev/accounts/going-dev/projects/Going/builds/78a9235e-8542-4bad-8637-1d58e9b4ffc7";
  const result = await QRCode.toFile(`./$foo.png`, str, { type: "png" });

  console.log(result);
}

main();
