# QR Code generator

Github action that outputs a string QR code

## Usage

```yml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: Get a QR Code
    steps:
      - name: Generate a QR code
        id: qr
        uses: gretzky/qrcode-github-action@v0.1.0

      - name: Get the QR code
        run: echo "${{ steps.qr.outputs.qrcode }}"
```
