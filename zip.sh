cd ..

DIR=rubick-plugin-monalisa      # 要打包的目标目录

# 排除的目录列表

array=(.idea src .git package-lock.json .DS_Store)

excludes=
for item in ${array[@]}
do
  excludes="$excludes --exclude $DIR/$item"
done

# 打包时排除指定目录
tar $excludes -zcf $DIR.tar.gz $DIR
