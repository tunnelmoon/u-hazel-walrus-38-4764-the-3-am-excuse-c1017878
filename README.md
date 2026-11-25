# The 3 AM Excuse

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/tunnelmoon/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/tunnelmoon/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

Entry for the make.fun bounty [The 3 AM Excuse](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878): one line, under 200 characters, in the voice of a hardware wallet that refuses to sign a transaction at 3 AM.

## The line

> No. Last time I signed at 3 AM you bought a boat. You do not own a lake, and I am not doing this again.

## How it works

`main.ts` (Node 22, standard library only) validates the line against the gate (1 to 200 characters, a single line, not only white space) and writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, then reads it back to confirm the write.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
