cd /tmp
mkdir www
cp index.html www
cp script.js www
cp -R assets www/
echo "<hr>Running on $(hostname)" >> www/index.html
cd www
python -m SimpleHTTPServer 8080