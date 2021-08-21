// Eduardo T Santos
const Qtd_Pecas = 10;
const Pecas_Peso = 100;
const TamanhoNome = 3;
// Lista de peças
var Lista_Pecas  = ["It","pivo","biela","pistão","mancal","cabeçote","vela","bobina","Amortecedor","Anel de pistão","Bomba elétrica","Bronzina","Terminal de direção","Barra de direção","Barra de ligação","Terminal axial","Lonas","Pastilhas","Rodas","Catalisador"];
// Peso das peças
var Lista_Pecas_Peso  = [150,350,100,230,1200,2200,30,90,900,10,215,60,110,120,150,20,250,350,2200,380];
// Lista de peças que serão adicionadas
var Lista_Pecas_ADC  = [];
// Peso da lista de peças que serão adicionadas
var Lista_Pecas_Peso_ADC  = [];
var Acao = 0;

var Peca = Lista_Pecas[0];

    for(let i = 0; i < Lista_Pecas.length; i = i + 1 ) 
        {
            if (Lista_Pecas_ADC.length > (Qtd_Pecas -1) )
                {
                    console.log("Peça Não Adicionada Quantidade Maior que ",Qtd_Pecas,Lista_Pecas[i], " do " , " Peso ",Lista_Pecas_Peso[i])
                }
            else 
                {
                    if (Lista_Pecas_Peso[i] >= Pecas_Peso ) 
                        {
                            if (Lista_Pecas[i].length > TamanhoNome ) 
                            {
                                Acao = 0;
                            } 
                            else
                            {
                                Acao = 1;
                            }
                        } 
                    else 
                        {
                            Acao = 2;
                        }

                    switch (Acao) {
                        case 0:
                            Lista_Pecas_Peso_ADC.push(Lista_Pecas_Peso[i]);
                            Lista_Pecas_ADC.push(Lista_Pecas[i]);
                            break;
                        case 1:    
                            console.log("Peça Não Adicionada Nome Menor que ",TamanhoNome,Lista_Pecas[i],  " Peso ",Lista_Pecas_Peso[i])
                            break;
                        case 2:
                            console.log("Peça Não Adicionada Peso Menor que ",Pecas_Peso,Lista_Pecas[i],   " Peso ",Lista_Pecas_Peso[i])
                            break;
                        default:
                            break;
                    }

                }
        }

        // Lista os incluidos
        for(let i = 0; i < Lista_Pecas_ADC.length; i = i + 1 ) 
        {
            console.log("Peça Adicionada ",Lista_Pecas_ADC[i],  " Peso ",Lista_Pecas_Peso_ADC[i]);
        }
    