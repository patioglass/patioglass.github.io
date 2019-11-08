## patiopatimon.com
ぱちおのホームページのソースコード

sourceブランチにソースコードがおいてある(masterにはgh-pages用のbuildされたものが配置されている)

## 開発

    git clone git@github.com:patioglass/patioglass.github.io.git
    cd patioglass.github.io
    
## localhost
    npm run start

## build
    npm run build

## deploy
    # 作業したもののコミットを作っておく
    git add -p
    git commit -m 'something'

    # build以下がadd,commitされる
    # masterブランチにbuild以下, sourceブランチに今までのコミットがpushされる)
    npm run deploy
