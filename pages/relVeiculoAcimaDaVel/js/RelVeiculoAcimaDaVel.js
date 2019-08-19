Cmp.RelVeiculoAcimaDaVel = function() {
    
    var private = {

        render: function() {


            Cmp.createInput({
                id: 'inputPlaca',
                renderTo: '#divInputPlaca',
                label: 'Placa do veículo',
                width: '200px'
            });

            Cmp.createButton({
                id: 'btnBuscar',
                renderTo: '#divBtnConsultar',
                text: 'Buscar',
                handler: function() {
                    private.buscar();
                }
            });

            Cmp.createGrid({
                id: 'gridDadosVeiculosAcima',
                renderTo: '#divCmpGridVeiculoAcima',
                header: [
                    {
                        text: 'Placa',
                        field: 'placa',
                        width: 100
                    }, {
                        text: 'Funcionário',
                        field: 'nome'
                    }, {
                        text: 'Data',
                        field: 'data_ocorrencia'
                    }, {
                        text: 'Vel. Max.',
                        field: 'vel_maxima',
                        width: 100
                    }, {
                        text: 'Vel. Reg.',
                        field: 'vel_reg',
                        width: 100
                    }, {
                        text: 'Diff. Vel.',
                        field: 'diferenca_vel',
                        width: 100
                    }, {
                        text: 'Latitude',
                        field: 'latitude'
                    }, {
                        text: 'Longitude',
                        field: 'longitude'
                    },                    
                ]
            });

        },

        buscar: function() {
            Cmp.showLoading();
            
            Cmp.request({
                url: 'index.php?mdl=relVeiculoAcimaDaVel&file=ds_veiculoAcima.php',
                params: {
                    placa: Cmp.get('inputPlaca').getValue()
                },
                success: function(res) {
                    Cmp.hideLoading();
                    if(res.status == 'success') {
                        Cmp.get('gridDadosVeiculosAcima').loadData(res.data);
                    } else {
                        Cmp.showErrorMessage(res.message || 'Ocorreu um erro na requisição');
                    }
                }
            });
        }

    };

    this.init = function() {
        private.render();
    }

}