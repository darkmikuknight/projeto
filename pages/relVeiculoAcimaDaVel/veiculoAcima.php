<div class="row">
    <div class="col-12">
        <div class="jumbotron">
            <div id="titulo"> Relatório de veículos com velocidade acima da permitida</div>
            <div id="divInputPlaca"></div>
            <div id="divBtnConsultar"></div>
        </div>

        <div id="divCmpGridVeiculoAcima"></div>
    </div>
</div>

<style type="text/css">
    .jumbotron {
        padding: 32px;
    }

    #divInputPlaca, #divBtnConsultar {
        display: inline-block;
        vertical-align: top;
    }

    #divBtnConsultar {
        margin-top: 32px;
        margin-left: 10px;
    }

    #titulo{
        font-size: larger;
        font-weight: bold;
        text-align: center;
    }

    #divCmpGridVeiculoAcima {
        display: inline-block;
        width: 100%;
        margin-bottom: 20px;
    }
</style>

<script type="text/javascript">
    Cmp.ready(function() {
        new Cmp.RelVeiculoAcimaDaVel().init();
    });
</script>
