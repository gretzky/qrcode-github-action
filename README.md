# Strong Bad Emails

Github action that outputs a random Strong Bad email link from YouTube.

## Usage

```yml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: Get a Strong Bad email
    steps:
      - name: Generate an email link
        id: strongbad
        uses: gretzky/strongbad-github-action@v0.1.0

      - name: Get the email link
        run: echo "${{ steps.strongbad.outputs.email }}"
```
