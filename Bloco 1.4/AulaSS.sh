dataFormatada=`date +a%d%m%y%H%M`

echo "Bem-vindo ao primeiro script!!! Hoje eh $dataFormatada"
echo 'Digite seu nome e cidade de onde esta falando.'
read nome
read -p  "Agora, a cidade:" cidade
read -p "Agora, a idade: " idade

echo "Ola, $nome. Vc fala de $cidade?"

if [ $idade -lt 18 ] 
    then
        echo "Ainda es crianca..."
    else
        echo "Bem-vindo ao clube"
fi