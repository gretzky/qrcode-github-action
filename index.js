const core = require("@actions/core");
const QRCode = require("qrcode");

async function run() {
  try {
    const content = core.getInput("url", { required: true });
    const name = core.getInput("name");

    const base64 = await QRCode.toDataURL(content);
    const str = await QRCode.toString(content);
    const filePath = `${process.cwd()}/${name}.png`;
    const file = await QRCode.toFile(filePath, content, {
      type: "png",
    });

    core.setOutput("qrcodeBase64", base64);
    core.setOutput("qrcodeStr", str);
    core.setOutput("qrcodeImg", filePath);
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
