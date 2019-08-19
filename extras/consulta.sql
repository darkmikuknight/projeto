
--consulta teste
SELECT * from veiculo v INNER JOIN rastreamento r ON r.veiculo_id = v.id WHERE r.velocidade > v.vel_maxima;



--consulta com a diferenca sem usar aproximacao
SELECT v.placa, f.nome as nome, r.data, vel_maxima, r.velocidade as vel_reg, (r.velocidade - v.vel_maxima)/v.vel_maxima * 100 as diferenca_vel, r.latitude, r.longitude
FROM veiculo v 
INNER JOIN rastreamento r ON r.veiculo_id = v.id
INNER JOIN funcionario f ON f.id = r.funcionario_id
WHERE r.velocidade > v.vel_maxima;


--consulta completa
SELECT v.placa, f.nome as nome, r.data, v.vel_maxima, r.velocidade as vel_reg, CONCAT(ROUND((r.velocidade - v.vel_maxima)/v.vel_maxima * 100, 0), '%') as diferenca_vel, r.latitude, r.longitude
FROM veiculo v 
INNER JOIN rastreamento r ON r.veiculo_id = v.id
INNER JOIN funcionario f ON f.id = r.funcionario_id
WHERE r.velocidade > v.vel_maxima 


--placa ABC1003