const core = require("@actions/core");
const QRCode = require("qrcode");

async function run() {
  try {
    const content = core.getInput("url", { required: true });

    const result = await QRCode.toString(content);

    core.setOutput("qrcode", result);
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
