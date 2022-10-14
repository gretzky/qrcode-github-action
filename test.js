const QRCode = require("qrcode");
const stringHash = require("string-hash");

async function run(content, name) {
  try {
    const content = core.getInput("url", { required: true });

    const base64 = await QRCode.toDataURL(content);
    const str = await QRCode.toString(content);
    const filePath = `${process.cwd()}/${name}.png`;

    await QRCode.toFile(filePath, content, {
      type: "png",
    });

    console.log("qrcodeBase64", base64);
    console.log("qrcodeStr", str);
    console.log("qrcodeImg", filePath);
  } catch (err) {
    console.log(err.message);
  }
}

run(
  "https://expo.dev/accounts/going-dev/projects/Going/builds/78a9235e-8542-4bad-8637-1d58e9b4ffc7",
  "iosQRCode"
);
