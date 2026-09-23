// Transcripción de la lista proporcionada por la familia.
const parse = (text) => text.trim().split('\n').map((line) => {
  const [infinitive, past, participle, translation] = line.split('|');
  return { infinitive, past, participle, translation };
});

export const irregularVerbs = parse(`
be|was/were|been|ser / estar
beat|beat|beaten|golpear / vencer
become|became|become|convertirse en
begin|began|begun|comenzar
bend|bent|bent|doblar
bet|bet|bet|apostar
bite|bit|bitten|morder
blow|blew|blown|soplar
break|broke|broken|romper
bring|brought|brought|traer
broadcast|broadcast|broadcast|transmitir
build|built|built|construir
burst|burst|burst|reventar
buy|bought|bought|comprar
catch|caught|caught|atrapar
choose|chose|chosen|elegir
come|came|come|venir
cost|cost|cost|costar
creep|crept|crept|avanzar sigilosamente
cut|cut|cut|cortar
deal|dealt|dealt|tratar / repartir
dig|dug|dug|cavar
do|did|done|hacer
draw|drew|drawn|dibujar
drink|drank|drunk|beber
drive|drove|driven|conducir
eat|ate|eaten|comer
fall|fell|fallen|caer
feed|fed|fed|alimentar
feel|felt|felt|sentir
fight|fought|fought|pelear
find|found|found|encontrar
flee|fled|fled|huir
fly|flew|flown|volar
forbid|forbade|forbidden|prohibir
forget|forgot|forgotten|olvidar
forgive|forgave|forgiven|perdonar
freeze|froze|frozen|congelar
get|got|got/gotten|obtener / conseguir
give|gave|given|dar
go|went|gone|ir
grow|grew|grown|crecer
hang|hung|hung|colgar
have|had|had|tener
hear|heard|heard|oír
hide|hid|hidden|esconder
hit|hit|hit|golpear
hold|held|held|sostener
hurt|hurt|hurt|lastimar / doler
keep|kept|kept|guardar / mantener
kneel|knelt|knelt|arrodillarse
know|knew|known|saber / conocer
lay|laid|laid|poner / colocar
lead|led|led|liderar / guiar
leave|left|left|salir / dejar
lend|lent|lent|prestar
let|let|let|dejar / permitir
lie|lay|lain|acostarse / estar acostado
light|lit|lit|encender / iluminar
lose|lost|lost|perder
make|made|made|hacer / crear
mean|meant|meant|significar
meet|met|met|conocer / reunirse con
pay|paid|paid|pagar
put|put|put|poner
read|read|read|leer
ride|rode|ridden|montar / andar en bicicleta
ring|rang|rung|sonar / llamar
rise|rose|risen|elevarse / subir
run|ran|run|correr
say|said|said|decir
see|saw|seen|ver
seek|sought|sought|buscar
sell|sold|sold|vender
send|sent|sent|enviar
set|set|set|colocar / fijar
sew|sewed|sewn/sewed|coser
shake|shook|shaken|sacudir
shine|shone|shone|brillar
shoot|shot|shot|disparar
show|showed|shown/showed|mostrar
shrink|shrank|shrunk|encogerse
shut|shut|shut|cerrar
sing|sang|sung|cantar
sink|sank|sunk|hundirse
sit|sat|sat|sentarse
sleep|slept|slept|dormir
slide|slid|slid|deslizarse
speak|spoke|spoken|hablar
spend|spent|spent|gastar / pasar tiempo
spit|spat|spat|escupir
split|split|split|dividir
spread|spread|spread|extender / untar
spring|sprang|sprung|saltar / brotar
stand|stood|stood|estar de pie
steal|stole|stolen|robar
stick|stuck|stuck|pegar / adherirse
sting|stung|stung|picar
stink|stank|stunk|oler mal
strike|struck|struck|golpear
swear|swore|sworn|jurar / decir groserías
sweep|swept|swept|barrer
swim|swam|swum|nadar
swing|swung|swung|balancearse
take|took|taken|tomar / llevar
teach|taught|taught|enseñar
tear|tore|torn|rasgar
tell|told|told|decir / contar
think|thought|thought|pensar
throw|threw|thrown|lanzar
understand|understood|understood|entender
wake|woke|woken|despertar
wear|wore|worn|llevar puesto
weep|wept|wept|llorar
win|won|won|ganar
write|wrote|written|escribir
`);

// Formas explícitas para conservar los cambios ortográficos de cada verbo.
export const regularVerbs = parse(`
accept|accepted|accepted|aceptar
add|added|added|agregar
agree|agreed|agreed|estar de acuerdo
allow|allowed|allowed|permitir
answer|answered|answered|responder
appear|appeared|appeared|aparecer
arrive|arrived|arrived|llegar
ask|asked|asked|preguntar / pedir
believe|believed|believed|creer
belong|belonged|belonged|pertenecer
borrow|borrowed|borrowed|pedir prestado
call|called|called|llamar
carry|carried|carried|llevar / cargar
change|changed|changed|cambiar
check|checked|checked|revisar
clean|cleaned|cleaned|limpiar
climb|climbed|climbed|trepar / escalar
close|closed|closed|cerrar
collect|collected|collected|coleccionar / recoger
compare|compared|compared|comparar
complete|completed|completed|completar
continue|continued|continued|continuar
cook|cooked|cooked|cocinar
copy|copied|copied|copiar
count|counted|counted|contar números
create|created|created|crear
cry|cried|cried|llorar
dance|danced|danced|bailar
decide|decided|decided|decidir
deliver|delivered|delivered|entregar
describe|described|described|describir
design|designed|designed|diseñar
discover|discovered|discovered|descubrir
discuss|discussed|discussed|conversar sobre / debatir
dress|dressed|dressed|vestirse
dry|dried|dried|secar
earn|earned|earned|ganar dinero
enjoy|enjoyed|enjoyed|disfrutar
enter|entered|entered|entrar
explain|explained|explained|explicar
finish|finished|finished|terminar
fix|fixed|fixed|reparar
follow|followed|followed|seguir
happen|happened|happened|ocurrir
hate|hated|hated|odiar
help|helped|helped|ayudar
hope|hoped|hoped|esperar / tener esperanza
imagine|imagined|imagined|imaginar
improve|improved|improved|mejorar
include|included|included|incluir
invite|invited|invited|invitar
join|joined|joined|unirse a
jump|jumped|jumped|saltar
kick|kicked|kicked|patear
laugh|laughed|laughed|reír
like|liked|liked|gustar
listen|listened|listened|escuchar
live|lived|lived|vivir
look|looked|looked|mirar
love|loved|loved|amar / encantar
manage|managed|managed|gestionar / lograr
miss|missed|missed|extrañar / perderse algo
mix|mixed|mixed|mezclar
move|moved|moved|mover / mudarse
need|needed|needed|necesitar
notice|noticed|noticed|notar
offer|offered|offered|ofrecer
open|opened|opened|abrir
order|ordered|ordered|ordenar / pedir
paint|painted|painted|pintar
park|parked|parked|estacionar
pass|passed|passed|pasar / aprobar
phone|phoned|phoned|llamar por teléfono
pick|picked|picked|escoger / recoger
plan|planned|planned|planificar
play|played|played|jugar / tocar un instrumento
practice|practiced|practiced|practicar
prefer|preferred|preferred|preferir
prepare|prepared|prepared|preparar
promise|promised|promised|prometer
pull|pulled|pulled|tirar de
push|pushed|pushed|empujar
rain|rained|rained|llover
reach|reached|reached|alcanzar
receive|received|received|recibir
relax|relaxed|relaxed|relajarse
remember|remembered|remembered|recordar
repeat|repeated|repeated|repetir
reply|replied|replied|responder
return|returned|returned|volver / devolver
save|saved|saved|guardar / ahorrar
seem|seemed|seemed|parecer
share|shared|shared|compartir
shout|shouted|shouted|gritar
smile|smiled|smiled|sonreír
start|started|started|empezar
stay|stayed|stayed|quedarse
stop|stopped|stopped|detenerse
study|studied|studied|estudiar
suggest|suggested|suggested|sugerir
talk|talked|talked|hablar
taste|tasted|tasted|probar un sabor
thank|thanked|thanked|agradecer
touch|touched|touched|tocar
travel|traveled|traveled|viajar
try|tried|tried|intentar
turn|turned|turned|girar
use|used|used|usar
visit|visited|visited|visitar
wait|waited|waited|esperar
walk|walked|walked|caminar
want|wanted|wanted|querer
wash|washed|washed|lavar
watch|watched|watched|mirar / ver
work|worked|worked|trabajar
worry|worried|worried|preocuparse
`);
