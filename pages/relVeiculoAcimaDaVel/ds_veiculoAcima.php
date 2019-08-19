<?php

//$where = 'WHERE r.velocidade > v.vel_maxima';
$where ='';

if(!empty($_REQUEST['placa'])) {
    $where = " AND v.placa LIKE '%{$_REQUEST['placa']}%'";
}

$db = new Database();

if($db->connect()) {

    $dados = $db->sqlQueryArray(
        "SELECT 
            v.placa as placa, 
            f.nome as nome, 
            r.data as data_ocorrencia, 
            v.vel_maxima as vel_maxima, 
            r.velocidade as vel_reg, 
            CONCAT(ROUND((r.velocidade - v.vel_maxima)/v.vel_maxima * 100, 0), '%') as diferenca_vel, 
            r.latitude as latitude, r.longitude as longitude
        FROM veiculo v 
        INNER JOIN rastreamento r ON r.veiculo_id = v.id
        INNER JOIN funcionario f ON f.id = r.funcionario_id
        WHERE r.velocidade > v.vel_maxima  
        {$where}"
    );

    echo json_encode(array(
        'status' => 'success',
        'data' => $dados
    ));

} else {
    echo json_encode(array(
        'status' => 'failure',
        'message' => 'Erro ao conectar ao banco'
    ));
}