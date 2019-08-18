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
                        width: 150
                    }, {
                        text: 'Funcionario',
                        field: 'nome'
                    }, {
                        text: 'Data',
                        field: 'data',
                    }, {
                        text: 'Vel. Max.',
                        field: 'vel_maxima',
                        width: 150
                    }, {
                        text: 'Vel. Reg.',
                        field: 'vel_reg',
                        width: 150
                    }, {
                        text: 'Diff. Vel.',
                        field: 'diferena_vel',
                        width: 150
                    }, {
                        text: 'Vel. Max.',
                        field: 'vel_maxima',
                        width: 150
                    }, {
                        text: 'Latitude',
                        field: 'latitude',
                    }, {
                        text: 'Longitude',
                        field: 'longitude',
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