import { Button } from '@atoms/Button'
import { InputField } from '@molecules/InputField'
import { ChartBox } from '@organisms/ChartBox'
import { DashboardTemplate } from '@templates/DashboardTemplate'
import { CardResumoFinanceiro } from '@molecules/CardResumoFinanceiro'


function App() {
    return (
        <DashboardTemplate>
            <div className="p-4 space-y-6">
                <h1 className="text-3xl font-bold">FinanceBox Dashboard</h1>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Campo de entrada</h2>
                    <InputField />
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Botão</h2>
                    <Button onClick={() => alert('Clique detectado!')}>
                        Clique aqui
                    </Button>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Gráfico</h2>
                    <ChartBox />
                </div>
            </div>
            <div className="flex flex-wrap gap-4 p-6 bg-gray-100 min-h-screen">
                <CardResumoFinanceiro titulo="Entradas" valor={5000} tipo="entrada" />
                <CardResumoFinanceiro titulo="Saídas" valor={2200} tipo="saida" />
                <CardResumoFinanceiro titulo="Saldo Atual" valor={2800} tipo="saldo" />
            </div>
        </DashboardTemplate>

    )
}

export default App