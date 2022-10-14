const core = require("@actions/core");
const QRCode = require("qrcode");
const stringHash = require("string-hash");

async function run() {
  try {
    const content = core.getInput("url");

    const base64 = await QRCode.toDataURL(content);
    core.setOutput("qrcodeBase64", base64);

    const str = await QRCode.toString(content);
    core.setOutput("qrcodeStr", str);

    const fileName = `${stringHash(content)}.png`;
    const filePath = `${process.cwd()}/${fileName}`;

    core.info(content);
    core.info(typeof content);

    QRCode.toFile(filePath, content, { type: "png" }, (err) => {
      if (err) throw err;
      core.setOutput("qrcodeImg", filePath);
    });
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
