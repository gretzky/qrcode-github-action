const core = require("@actions/core");
const QRCode = require("qrcode");

async function run() {
  try {
    const content = core.getInput("url", { required: true });
    const name = core.getInput("name");

    const base64 = await QRCode.toDataURL(content);
    const str = await QRCode.toString(content);
    const file = await QRCode.toFile(`${process.cwd()}/${name}.png`, {
      type: "png",
    });

    core.setOutput("qrcodeBase64", base64);
    core.setOutput("qrcodeStr", str);
    core.setOutput("qrcodeImg", file);
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
